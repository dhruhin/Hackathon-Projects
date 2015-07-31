//
//  DetailViewController.m
//  Homepwner
//
//  Created by joeconway on 9/1/11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#import "CardDetailViewController.h"
#import "BNRCard.h"
#import "BNRImageStore.h"
#import "BNRItem.h"
#import "AssetTypePicker.h"

@implementation CardDetailViewController
@synthesize item;
@synthesize itemInstance;
@synthesize dismissBlock;

- (id)initForNewItem:(BOOL)isNew itemInstance:(BNRItem *)itemI
{
    self = [super initWithNibName:@"CardDetailViewController" bundle:nil];
    
    if (self) {
        if (isNew) {
            UIBarButtonItem *doneItem = [[UIBarButtonItem alloc] 
                    initWithBarButtonSystemItem:UIBarButtonSystemItemDone 
                                         target:self 
                                         action:@selector(save:)];
            [[self navigationItem] setRightBarButtonItem:doneItem];            
            
            UIBarButtonItem *cancelItem = [[UIBarButtonItem alloc] 
                    initWithBarButtonSystemItem:UIBarButtonSystemItemCancel 
                                         target:self 
                                         action:@selector(cancel:)];
            [[self navigationItem] setLeftBarButtonItem:cancelItem];
        }
    }
    explanation.frame = CGRectMake(explanation.frame.origin.x,explanation.frame.origin.y, 280,280);
    itemInstance = itemI;
    return self;
}

- (id)initWithNibName:(NSString *)nibName bundle:(NSBundle *)bundle
{
    @throw [NSException exceptionWithName:@"Wrong initializer"
                                   reason:@"Use initForNewItem:"
                                 userInfo:nil];
    return nil;
}


- (void)setItem:(BNRCard *)i
{
    item = i;
    [[self navigationItem] setTitle:[item question]];
}

- (IBAction)save:(id)sender
{
    [[self presentingViewController] dismissViewControllerAnimated:YES completion:dismissBlock];
}

- (IBAction)cancel:(id)sender
{
    // If the user cancelled, then remove the BNRItem from the store
    [itemInstance removeItem:item];

    [[self presentingViewController] dismissViewControllerAnimated:YES completion:dismissBlock];
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];

    [question setText:[item question]];
    [answer setText:[item answer]];
    [explanation setText:[item explanation]];
    [explanation1 setText:[item explanation1]];
    [explanation2 setText:[item explanation2]];

    
    // Use filtered NSDate object to set dateLabel contents

    // Change the navigation item to display name of item
    [[self navigationItem] setTitle:[item question]];

    NSString *imageKey = [item imageKey];
    if (imageKey) {
        // Get image for image key from image store
        UIImage *imageToDisplay =
        [[BNRImageStore sharedStore] imageForKey:imageKey];
        // Use that image to put on the screen in imageView
        [imageView setImage:imageToDisplay];
    } else {
        // Clear the imageView
        [imageView setImage:[item thumbnail]];
    }
}
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)io
{
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPad) {
        return YES;
    } else {
        return (io == UIInterfaceOrientationPortrait);
    } 
}
- (void)viewDidLoad
{
    [super viewDidLoad];

    UIColor *clr = nil;  
    if([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPad) {
        clr = [UIColor colorWithRed:0.875 green:0.88 blue:0.91 alpha:1];
    } else {
        clr = [UIColor groupTableViewBackgroundColor];
    }
    [[self view] setBackgroundColor:clr];
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField
{
    [textField resignFirstResponder];
    return YES; 
}

- (void)viewWillDisappear:(BOOL)animated
{
    [super viewWillDisappear:animated];

    // Clear first responder
    [[self view] endEditing:YES];

    // "Save" changes to item
    [item setQuestion:[question text]];
    [item setAnswer:[answer text]];
    [item setExplanation:[explanation text]];
    [item setExplanation1:[explanation1 text]];
    [item setExplanation2:[explanation2 text]];
}

- (IBAction)takePicture:(id)sender 
{
    if([imagePickerPopover isPopoverVisible]) {
        [imagePickerPopover dismissPopoverAnimated:YES];
        imagePickerPopover = nil;
        return;
    }   

    NSString *oldKey = [item imageKey];
    // Did the item already have an image?
    if (oldKey) {
        // Delete the old image
        [[BNRImageStore sharedStore] deleteImageForKey:oldKey];
    }
    
    UIImagePickerController *imagePicker =
            [[UIImagePickerController alloc] init];
    
    // If our device has a camera, we want to take a picture, otherwise, we
    // just pick from photo library
    if ([UIImagePickerController
            isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera]) {
        [imagePicker setSourceType:UIImagePickerControllerSourceTypeCamera];
    } else {
        [imagePicker setSourceType:UIImagePickerControllerSourceTypePhotoLibrary];
    }
    
    [imagePicker setDelegate:self];

    // Place image picker on the screen
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPad) {
        // Create a new popover controller that will display the imagePicker
        imagePickerPopover = [[UIPopoverController alloc] 
                initWithContentViewController:imagePicker];
    
        [imagePickerPopover setDelegate:self];
    
        // Display the popover controller, sender 
        // is the camera bar button item
        [imagePickerPopover presentPopoverFromBarButtonItem:sender
                                   permittedArrowDirections:UIPopoverArrowDirectionAny
                                                   animated:YES];
    } else {
        [self presentViewController:imagePicker animated:YES completion:nil];
    }
}

- (void)popoverControllerDidDismissPopover:(UIPopoverController *)popoverController
{
    NSLog(@"User dismissed popover");
    imagePickerPopover = nil;
}

- (IBAction)backgroundTapped:(id)sender 
{
    [[self view] endEditing:YES];
    NSLog(@"%@", [self presentingViewController]);
}

- (void)imagePickerController:(UIImagePickerController *)picker
didFinishPickingMediaWithInfo:(NSDictionary *)info
{
    // Get picked image from info dictionary
    UIImage *image = [info objectForKey:UIImagePickerControllerOriginalImage];

    [item setThumbnailDataFromImage:image];
    
    // Create a CFUUID object - it knows how to create unique identifier strings
    CFUUIDRef newUniqueID = CFUUIDCreate (kCFAllocatorDefault);

    // Create a string from unique identifier
    CFStringRef newUniqueIDString =
            CFUUIDCreateString (kCFAllocatorDefault, newUniqueID);

    // Use that unique ID to set our item's imageKey
    NSString *key = (__bridge NSString *)newUniqueIDString;
    [item setImageKey:key];
    
    
    // Store image in the BNRImageStore with this key
    [[BNRImageStore sharedStore] setImage:image
                                         forKey:[item imageKey]];

    CFRelease(newUniqueIDString);
    CFRelease(newUniqueID);
            
    // Put that image onto the screen in our image view
    [imageView setImage:image];

    if([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPhone) {
        // If on the phone, the image picker is presented modally. Dismiss it.
        [self dismissViewControllerAnimated:YES completion:nil];
    } else {    
        // If on the ipad, the image picker is in the popover. Dismiss the popover.
        [imagePickerPopover dismissPopoverAnimated:YES];
        imagePickerPopover = nil;
    }

}

@end