//
//  ItemsViewController.h
//  Homepwner
//
//  Created by joeconway on 8/30/11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CardDetailViewController.h"

@class BNRItem;
@interface CardsViewController : UITableViewController
    <UIPopoverControllerDelegate>
{
    UIPopoverController *imagePopover;
}

@property (nonatomic, retain) BNRItem* item;

- (IBAction)addNewItem:(id)sender;
-(id)initWithString:(NSString *) i;
@end