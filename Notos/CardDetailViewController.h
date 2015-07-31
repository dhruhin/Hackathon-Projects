#import <UIKit/UIKit.h>
#import "BNRCard.h"
#import "BNRItem.h"
@class BNRCard;

@interface CardDetailViewController : UIViewController
    <UINavigationControllerDelegate, UIImagePickerControllerDelegate, UITextFieldDelegate, UIPopoverControllerDelegate>
{
    __weak IBOutlet UITextField *question;
    __weak IBOutlet UITextField *answer;
    __weak IBOutlet UITextField *explanation;
    __weak IBOutlet UITextField *explanation1;
    __weak IBOutlet UITextField *explanation2;
    __weak IBOutlet UIImageView *imageView;

    UIPopoverController *imagePickerPopover;
}

- (id)initForNewItem:(BOOL)isNew itemInstance:(BNRItem *)itemI;

@property (nonatomic, strong) BNRCard *item;

@property (nonatomic, copy) void (^dismissBlock)(void);

@property (nonatomic, retain) BNRItem *itemInstance;

- (IBAction)takePicture:(id)sender;
- (IBAction)backgroundTapped:(id)sender;

@end
