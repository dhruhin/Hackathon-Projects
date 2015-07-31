//
//  GameViewController.h
//  Homepwner
//
//  Created by Dhruhin Kurli on 4/13/13.
//
//

#import <UIKit/UIKit.h>
#import "BNRItem.h"

@interface GameViewController : UIViewController {
    
    __weak IBOutlet UIImageView *imageView;
    __weak IBOutlet UILabel *explain;
    __weak IBOutlet UILabel *explain1;
    __weak IBOutlet UILabel *explain2;
    __weak IBOutlet UILabel *choice1;
    __weak IBOutlet UILabel *choice2;
    __weak IBOutlet UILabel *choice3;
    __weak IBOutlet UILabel *choice4;
    
}
@property (atomic) BNRItem* item;
@property (atomic) NSArray* array;
@property (atomic) int number;
@property (atomic) int current;
- (id)initWithString:(NSString *)string;
-(void)loadQuestion:(int)num;
-(IBAction)case1:(id)sender;
-(IBAction)case2:(id)sender;
-(IBAction)case3:(id)sender;
-(IBAction)case4:(id)sender;
@end
