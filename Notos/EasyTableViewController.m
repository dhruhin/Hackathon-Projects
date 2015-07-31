//
//  EasyTableViewController.m
//  EasyTableViewController
//
//  Created by Aleksey Novicov on 5/30/10.
//  Copyright Yodel Code LLC 2010. All rights reserved.
//

#import <QuartzCore/QuartzCore.h>
#import "EasyTableViewController.h"
#import "EasyTableView.h"
#import "HardTableViewController.h"
#import "ItemsViewController.h"
#import "BNRItemStore.h"
#import "BNRItem.h"
#import "BNRImageStore.h"

#define SHOW_MULTIPLE_SECTIONS		1		// If commented out, multiple sections with header and footer views are not shown

#define PORTRAIT_WIDTH				768
#define LANDSCAPE_HEIGHT			(768+175)
#define HORIZONTAL_TABLEVIEW_HEIGHT	600
#define VERTICAL_TABLEVIEW_WIDTH	450
#define TABLE_BACKGROUND_COLOR		[UIColor clearColor]

#define BORDER_VIEW_TAG				10
#define LABEL_TAG					100
#define IMAGE_TAG					101

#ifdef SHOW_MULTIPLE_SECTIONS
	#define NUM_OF_CELLS			10
	#define NUM_OF_SECTIONS			1
#else
	#define NUM_OF_CELLS			21
#endif

@interface EasyTableViewController (MyPrivateMethods)
- (void)setupHorizontalView;
- (void)setupVerticalView;

@end
@implementation EasyTableViewController
@synthesize vi;
@synthesize bigLabel, verticalView, horizontalView;


- (void)viewDidLoad {
    [super viewDidLoad];
	[self setupHorizontalView];
    
}


- (void)viewDidUnload {
	[super viewDidUnload];	
	self.bigLabel = nil;
}


- (void)viewWillAppear:(BOOL)animated {
	[super viewWillAppear:animated];
}
-(void)viewDidAppear:(BOOL)animated{
    [horizontalView setNumberOfCells:[[[BNRItemStore sharedStore]allItems]count]+1];
    [horizontalView.tableView reloadData];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return YES;
}

#pragma mark -
#pragma mark EasyTableView Initialization
- (void)setupHorizontalView {
	CGRect frameRect	= CGRectMake(0, LANDSCAPE_HEIGHT - HORIZONTAL_TABLEVIEW_HEIGHT, PORTRAIT_WIDTH, HORIZONTAL_TABLEVIEW_HEIGHT);
	vi	= [[EasyTableView alloc] initWithFrame:frameRect numberOfColumns:[[[BNRItemStore sharedStore]allItems]count]+1 ofWidth:VERTICAL_TABLEVIEW_WIDTH];
	self.horizontalView = vi;
	
	horizontalView.delegate						= self;
	horizontalView.tableView.backgroundColor	= TABLE_BACKGROUND_COLOR;
	horizontalView.tableView.allowsSelection	= YES;
	horizontalView.tableView.separatorColor		= [UIColor clearColor];
	horizontalView.cellBackgroundColor			= [UIColor clearColor];
	horizontalView.autoresizingMask				= UIViewAutoresizingFlexibleTopMargin | UIViewAutoresizingFlexibleWidth;
	
	[self.view addSubview:horizontalView];
}
#pragma mark -
#pragma mark Utility Methods
- (void)borderIsSelected:(BOOL)selected forView:(UIView *)view {
	UIImageView *borderView		= (UIImageView *)[view viewWithTag:BORDER_VIEW_TAG];
	NSString *borderImageName	= (selected) ? @"selected_border.png" : @"image_border.png";
	borderView.image			= [UIImage imageNamed:borderImageName];
}


// These delegate methods support both example views - first delegate method creates the necessary views

#pragma mark -
#pragma mark EasyTableViewDelegate

- (UIView *)easyTableView:(EasyTableView *)easyTableView viewForRect:(CGRect)rect {
    UIView *container = [[UIView alloc]initWithFrame:rect];

    CGRect labelRect		= CGRectMake(20, 32, 410, 37);
	UILabel *label			= [[UILabel alloc] initWithFrame:labelRect];
    label.font = [UIFont systemFontOfSize:32];
    label.textAlignment = UITextAlignmentCenter;
    label.tag = LABEL_TAG;
    [container addSubview:label];
    
    CGRect imageRect = CGRectMake(40, 100, 360, 351);
    UIImageView *image = [[UIImageView alloc]initWithFrame:imageRect];
    image.tag = IMAGE_TAG;
    image.contentMode	= UIViewContentModeScaleAspectFit;
    [container addSubview:image];
	
    container.backgroundColor = [UIColor whiteColor];
	return container;
}

// Second delegate populates the views with data from a data source

- (void)easyTableView:(EasyTableView *)easyTableView setDataForView:(UIView *)view forIndexPath:(NSIndexPath *)indexPath {
    UILabel *label = (UILabel *)[view viewWithTag:LABEL_TAG];
	
	// Set the image for the given index
	UIImageView *imageView = (UIImageView *)[view viewWithTag:IMAGE_TAG];
    
    if(indexPath.row < [[[BNRItemStore sharedStore]allItems]count]){
	BNRItem *i = [[[BNRItemStore sharedStore]allItems]objectAtIndex:indexPath.row];
    
        UIImage *imageToDisplay = [[BNRImageStore sharedStore] imageForKey:[i imageKey]];
        imageView.image = imageToDisplay;
	label.text = [i itemName];
    
    
   // UIImageView *image = (UIImageView *)[view viewWithTag:IMAGE_TAG];
        
    }else{
        label.text = @"Edit Sets";
        imageView.image = [UIImage imageNamed: @"add.png"];
    }
	//image.image = [];
	
	// selectedIndexPath can be nil so we need to test for that condition
	BOOL isSelected = (easyTableView.selectedIndexPath) ? ([easyTableView.selectedIndexPath compare:indexPath] == NSOrderedSame) : NO;
	[self borderIsSelected:isSelected forView:view];		
}


- (void)easyTableView:(EasyTableView *)easyTableView selectedView:(UIView *)selectedView atIndexPath:(NSIndexPath *)indexPath deselectedView:(UIView *)deselectedView {
	/*[self borderIsSelected:YES forView:selectedView];
	
	if (deselectedView) 
		[self borderIsSelected:NO forView:deselectedView];
	
	UILabel *label	= (UILabel *)selectedView;
    bigLabel.text = label.text;
    bigLabel.textColor = [UIColor redColor];*/
    if(indexPath.row==[[[BNRItemStore sharedStore]allItems]count]){
        ItemsViewController *i = [[ItemsViewController alloc]init];
        [[self navigationController]pushViewController:i animated:YES];
        }
    else if (indexPath.row<[[[BNRItemStore sharedStore]allItems]count]){
        HardTableViewController *cardView = [[HardTableViewController alloc]initWithString:[NSString stringWithFormat:@"%d", indexPath.row]];
    
    [[self navigationController]pushViewController:cardView animated:YES];
        
    }else
        return;
}

#pragma mark -
#pragma mark Optional EasyTableView delegate methods for section headers and footers
@end
