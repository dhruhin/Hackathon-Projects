//
//  ItemsViewController.m
//  Homepwner
//
//  Created by joeconway on 8/30/11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#import "CardsViewController.h"
#import "BNRItemStore.h"
#import "BNRItem.h"
#import "HomepwnerItemCell.h"
#import "BNRImageStore.h"
#import "ImageViewController.h"
#import "EasyTableViewController.h"
#import "BNRCard.h"

@implementation CardsViewController
@synthesize item;
- (id)init 
{
    // Call the superclass's designated initializer
    self = [super initWithStyle:UITableViewStyleGrouped];
    self.tableView.rowHeight = 100.0;
    if (self) {
        UINavigationItem *n = [self navigationItem];
        [n setTitle:[item itemName]];

        // Create a new bar button item that will send
        // addNewItem: to ItemsViewController
        UIBarButtonItem *bbi = [[UIBarButtonItem alloc] 
                        initWithBarButtonSystemItem:UIBarButtonSystemItemAdd 
                                             target:self 
                                             action:@selector(addNewItem:)];

        // Set this bar button item as the right item in the navigationItem
        [[self navigationItem] setRightBarButtonItem:bbi];

        //[[self navigationItem] setLeftBarButtonItem:[self editButtonItem]];
    }
    return self;
}
-(id)initWithString:(NSString *)i{
    item = [[[BNRItemStore sharedStore]allItems]objectAtIndex:[i intValue]];
    if(!(item.allItems))
        [item loadAllItems];
    NSLog(@"%d", [[item allItems] count]);
    return [self init];
}
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)io
{
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPad) {
        return YES;
    } else {
        return (io == UIInterfaceOrientationPortrait);
    } 
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    [[self tableView] reloadData];
}
- (void)viewDidLoad
{
    [super viewDidLoad];
    
    UINib *nib = [UINib nibWithNibName:@"HomepwnerItemCell" bundle:nil];
    
    [[self tableView] registerNib:nib forCellReuseIdentifier:@"HomepwnerItemCell"];
    
}

- (IBAction)addNewItem:(id)sender
{
    // Create a new BNRItem and add it to the store
    BNRCard *newItem = [item createItem];
    
    CardDetailViewController *detailViewController =
            [[CardDetailViewController alloc] initForNewItem:YES itemInstance:item];
    
    [detailViewController setItem:newItem];

    [detailViewController setDismissBlock:^{
        [[self tableView] reloadData];
    }];

    UINavigationController *navController = [[UINavigationController alloc] 
                                initWithRootViewController:detailViewController];
        
    [navController setModalPresentationStyle:UIModalPresentationFormSheet];        
    [navController setModalTransitionStyle:UIModalTransitionStyleFlipHorizontal];
    
    [self presentViewController:navController animated:YES completion:nil];
}  
- (id)initWithStyle:(UITableViewStyle)style
{
    return [self init];
}

- (void)tableView:(UITableView *)tableView 
    moveRowAtIndexPath:(NSIndexPath *)fromIndexPath 
           toIndexPath:(NSIndexPath *)toIndexPath 
{
    [item moveItemAtIndex:[fromIndexPath row]
                                         toIndex:[toIndexPath row]];
}

- (void)tableView:(UITableView *)aTableView 
    didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    CardDetailViewController *detailViewController = [[CardDetailViewController alloc] initForNewItem:NO itemInstance:item];
    
    NSArray *items = [item allItems];
    BNRCard *selectedItem = [items objectAtIndex:[indexPath row]];

    // Give detail view controller a pointer to the item object in row
    [detailViewController setItem:selectedItem];
    
    // Push it onto the top of the navigation controller's stack
    [[self navigationController] pushViewController:detailViewController
                                           animated:YES];
}

- (void)tableView:(UITableView *)tableView 
    commitEditingStyle:(UITableViewCellEditingStyle)editingStyle 
     forRowAtIndexPath:(NSIndexPath *)indexPath 
{
    // If the table view is asking to commit a delete command...
    if (editingStyle == UITableViewCellEditingStyleDelete)
    {
        BNRItem *ps = item;
        NSArray *items = [ps allItems];
        BNRCard *p = [items objectAtIndex:[indexPath row]];
        [ps removeItem:p];

        // We also remove that row from the table view with an animation
        [tableView deleteRowsAtIndexPaths:[NSArray arrayWithObject:indexPath]
                         withRowAnimation:UITableViewRowAnimationFade];
    }
}

- (NSInteger)tableView:(UITableView *)tableView
 numberOfRowsInSection:(NSInteger)section
{
    return [[item allItems] count];
}

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    BNRCard *p = [[item allItems]
                                    objectAtIndex:[indexPath row]];
    
    HomepwnerItemCell *cell = [tableView dequeueReusableCellWithIdentifier:@"HomepwnerItemCell"];

    [cell setController:self];
    [cell setTableView:tableView];

    [[cell nameLabel] setText:[p question]];
    [[cell descriptionLabel] setText:[p answer]];
    
    [[cell thumbnailView] setImage:[p thumbnail]];

    return cell;
}

- (void)showImage:(id)sender atIndexPath:(NSIndexPath *)ip 
{
    NSLog(@"Going to show the image for %@", ip);

    // Get the item for the index path
    BNRItem *i = [[item allItems] objectAtIndex:[ip row]];

    NSString *imageKey = [i imageKey];

    // If there is no image, we don't need to display anything
    UIImage *img = [[BNRImageStore sharedStore] imageForKey:imageKey];
    if(!img)
        return;
    
    // Make a rectangle that the frame of the button relative to 
    // our table view
    CGRect rect = [[self view] convertRect:[sender bounds] fromView:sender];
    
    // Create a new ImageViewController and set its image
    ImageViewController *ivc = [[ImageViewController alloc] init];
    [ivc setImage:img];
    
    // Present a 600x600 popover 
    imagePopover = [[UIPopoverController alloc] initWithContentViewController:ivc];
    [imagePopover setDelegate:self];
    [imagePopover setPopoverContentSize:CGSizeMake(600, 600)];
    [imagePopover presentPopoverFromRect:rect 
                                  inView:[self view] 
                permittedArrowDirections:UIPopoverArrowDirectionAny 
                                animated:YES];
}
- (void)popoverControllerDidDismissPopover:(UIPopoverController *)popoverController
{
    [imagePopover dismissPopoverAnimated:YES];
    imagePopover = nil;
}
@end
