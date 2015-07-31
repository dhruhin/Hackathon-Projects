//
//  EasyTableViewController.h
//  EasyTableViewController
//
//  Created by Aleksey Novicov on 5/30/10.
//  Copyright Yodel Code LLC 2010. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "EasyTableView.h"
#import "BNRItem.h"
@interface HardTableViewController: UIViewController <EasyTableViewDelegate> {
	IBOutlet UILabel *bigLabel;
	EasyTableView *verticalView;
	EasyTableView *horizontalView;
}
-(id)initWithString:(NSString *)str;
@property (nonatomic) UILabel *bigLabel;
@property (nonatomic) EasyTableView *verticalView;
@property (nonatomic) EasyTableView *horizontalView;
@property (nonatomic)EasyTableView* vi;
@property (nonatomic) BNRItem* item;
@property (nonatomic) NSString* pos;
@end

