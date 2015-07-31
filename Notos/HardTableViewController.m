//
//  EasyTableViewController.m
//  EasyTableViewController
//
//  Created by Aleksey Novicov on 5/30/10.
//  Copyright Yodel Code LLC 2010. All rights reserved.
//

#import <QuartzCore/QuartzCore.h>
#import "HardTableViewController.h"
#import "EasyTableView.h"
#import "CardsViewController.h"
#import "ItemsViewController.h"
#import "BNRCard.h"
#import "BNRItem.h"
#import "BNRItemStore.h"
#import "BNRImageStore.h"
#import "GameViewController.h"
#define SHOW_MULTIPLE_SECTIONS		1		// If commented out, multiple sections with header and footer views are not shown

#define PORTRAIT_WIDTH				768
#define LANDSCAPE_HEIGHT			(768+200)
#define HORIZONTAL_TABLEVIEW_HEIGHT	650
#define VERTICAL_TABLEVIEW_WIDTH	450
#define TABLE_BACKGROUND_COLOR		[UIColor clearColor]

#define BORDER_VIEW_TAG				10
#define LABEL_TAG					100
#define LABEL2_TAG					101
#define LABEL3_TAG					102
#define LABEL4_TAG					103
#define IMAGE_TAG					104

#ifdef SHOW_MULTIPLE_SECTIONS
	#define NUM_OF_CELLS			10
	#define NUM_OF_SECTIONS			1
#else
	#define NUM_OF_CELLS			21
#endif

@interface HardTableViewController (MyPrivateMethods)
- (void)setupHorizontalView;
- (void)setupVerticalView;

@end
@implementation HardTableViewController
@synthesize vi, item, pos;
@synthesize bigLabel, verticalView, horizontalView;

- (void)viewDidLoad {
    [super viewDidLoad];
    UINavigationItem *n = [self navigationItem];
    [n setTitle:[item itemName]];
    [[self navigationItem] setRightBarButtonItem:[[UIBarButtonItem alloc]initWithTitle:@"Edit" style:UIBarButtonItemStylePlain target:self action:@selector(openCard)]];
	[self setupHorizontalView];
    //PlayButtonView *p = [[PlayButtonView alloc]init];
    //[self.view addSubview:p.view];
    
}
-(void)openCard{
    CardsViewController *cvc = [[CardsViewController alloc]initWithString:pos];
    [[self navigationController] pushViewController:cvc animated:YES];
}
-(id)initWithString:(NSString *)str{
    item = [[[BNRItemStore sharedStore] allItems]objectAtIndex:[str intValue]];
    pos = str;
    
    if(!(item.allItems))
        [item loadAllItems];
    NSLog(@"%d", [[item allItems] count]);
    return [super init];
}

- (void)viewDidUnload {
	[super viewDidUnload];	
	self.bigLabel = nil;
}

- (void)viewWillAppear:(BOOL)animated {
	[super viewWillAppear:animated];
}
-(void)viewDidAppear:(BOOL)animated{
    [horizontalView setNumberOfCells:[[item allItems]count]];
    [horizontalView.tableView reloadData];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return YES;
}

#pragma mark -
#pragma mark EasyTableView Initialization
- (void)setupHorizontalView {
	CGRect frameRect	= CGRectMake(0, LANDSCAPE_HEIGHT - HORIZONTAL_TABLEVIEW_HEIGHT, PORTRAIT_WIDTH, HORIZONTAL_TABLEVIEW_HEIGHT);
	vi	= [[EasyTableView alloc] initWithFrame:frameRect numberOfColumns:[[item allItems]count] ofWidth:VERTICAL_TABLEVIEW_WIDTH];
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
    UIView *container = [[UIScrollView alloc]initWithFrame:rect];

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
	
    CGRect labelRect2		= CGRectMake(20, 500, 410, 37);
	UILabel *label2			= [[UILabel alloc] initWithFrame:labelRect2];
    label2.font = [UIFont systemFontOfSize:32];
    label2.textAlignment = UITextAlignmentCenter;
    label2.tag = LABEL2_TAG;
    [container addSubview:label2];
    
    CGRect labelRect3		= CGRectMake(20, 550, 410, 37);
	UILabel *label3			= [[UILabel alloc] initWithFrame:labelRect3];
    label3.font = [UIFont systemFontOfSize:32];
    label3.textAlignment = UITextAlignmentCenter;
    label3.tag = LABEL3_TAG;
    [container addSubview:label3];
    
    CGRect labelRect4		= CGRectMake(20, 600, 410, 37);
	UILabel *label4			= [[UILabel alloc] initWithFrame:labelRect4];
    label4.font = [UIFont systemFontOfSize:32];
    label4.textAlignment = UITextAlignmentCenter;
    label4.tag = LABEL4_TAG;
    [container addSubview:label4];
    
	CGRect labelRectus		= CGRectMake(0, 0, rect.size.width, rect.size.height);
	UILabel *label23			= [[UILabel alloc] initWithFrame:labelRectus];
    UIImageView *borderView		= [[UIImageView alloc] initWithFrame:label23.bounds];
	borderView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
	borderView.tag				= BORDER_VIEW_TAG;
	
	[container addSubview:borderView];
    
    container.backgroundColor = [UIColor whiteColor];
	return container;
}

// Second delegate populates the views with data from a data source

- (void)easyTableView:(EasyTableView *)easyTableView setDataForView:(UIView *)view forIndexPath:(NSIndexPath *)indexPath {
    UILabel *label = (UILabel *)[view viewWithTag:LABEL_TAG];
	
	// Set the image for the given index
	UIImageView *imageView = (UIImageView *)[view viewWithTag:IMAGE_TAG];
    if(indexPath.row<[[item allItems]count]){
	BNRCard *i = [[item allItems]objectAtIndex:indexPath.row];
    
        UIImage *imageToDisplay = [[BNRImageStore sharedStore] imageForKey:[i imageKey]];
        imageView.image = imageToDisplay;
	label.text = [NSString stringWithFormat: @"%@ (%@)",[i question],[i answer]];
    UILabel *label2 = (UILabel *)[view viewWithTag:LABEL2_TAG];
    label2.text = [i explanation];
    UILabel *label3 = (UILabel *)[view viewWithTag:LABEL3_TAG];
    label3.text = [i explanation1];
    UILabel *label4 = (UILabel *)[view viewWithTag:LABEL4_TAG];
    label4.text = [i explanation2];
    }else if (indexPath.row==[[item allItems]count]){
        
        imageView.image = [UIImage imageNamed: @"add.png"];
        label.text = @"Play";
    }
	//image.image = [];
	
	// selectedIndexPath can be nil so we need to test for that condition
	BOOL isSelected = (easyTableView.selectedIndexPath) ? ([easyTableView.selectedIndexPath compare:indexPath] == NSOrderedSame) : NO;
	[self borderIsSelected:isSelected forView:view];		
}
- (BOOL)canBecomeFirstResponder {
    return YES;
}
- (void)motionBegan:(UIEventSubtype)motion
          withEvent:(UIEvent *)event {
    if (motion == UIEventSubtypeMotionShake) {
        [self loadGame];
    }
}
#pragma mark -
#pragma mark Optional EasyTableView delegate methods for section headers and footers
- (void)loadGame{
        GameViewController *i = [[GameViewController alloc]initWithString:pos];
        [[self navigationController]pushViewController:i animated:YES];
    
}
@end
