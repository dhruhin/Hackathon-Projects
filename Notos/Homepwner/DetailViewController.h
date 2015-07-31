#import <UIKit/UIKit.h>

@class BNRItem;

@interface DetailViewController : UIViewController
    <UINavigationControllerDelegate, UIImagePickerControllerDelegate, UITextFieldDelegate, UIPopoverControllerDelegate>
{
    __weak IBOutlet UITextField *question;
    __weak IBOutlet UITextField *answer;
    __weak IBOutlet UIButton *explanation;
    __weak IBOutlet UIImageView *imageView;
    UIPopoverController *imagePickerPopover;
}

- (id)initForNewItem:(BOOL)isNew;

@property (nonatomic, strong) BNRItem *item;

@property (nonatomic, copy) void (^dismissBlock)(void);

- (IBAction)takePicture:(id)sender;
- (IBAction)backgroundTapped:(id)sender;
- (IBAction)showAssetTypePicker:(id)sender;
@end
