//
//  GameViewController.m
//  Homepwner
//
//  Created by Dhruhin Kurli on 4/13/13.
//
//

#import "GameViewController.h"
#import "BNRItemStore.h"
#import "BNRItem.h"
#import "BNRCard.h"
#import "BNRImageStore.h"


@implementation GameViewController
@synthesize item, array;
@synthesize number, current;

-(void)viewDidLoad{
    [self questionArray];
    [self loadQuestion:0];
}

-(void)questionArray{
    array = [item allItems];
}
-(void)loadQuestion:(int)num{
    current = num;
    int numbah = -1;;
    if(num<[array count]){
        BNRCard *car = [array objectAtIndex:num];
        explain.text = [car explanation];
        explain1.text = [car explanation1];
        explain2.text = [car explanation2];
        
        UIImage *imageToDisplay = [[BNRImageStore sharedStore] imageForKey:[car imageKey]];
        imageView.image = imageToDisplay;
        
            int j = (int)arc4random()%4;
            UILabel *c1, *c2, *c3, *c4;
            if(j==0){
                c1 = choice1;
                c2 = choice2;
                c3 = choice3;
                c4 = choice4;
            }else if(j==1){
                c2 = choice1;
                c1 = choice2;
                c3 = choice3;
                c4 = choice4;
            }else if(j == 2){
                c1 = choice3;
                c2 = choice2;
                c3 = choice1;
                c4 = choice4;
            }else if(j == 3){
                c4 = choice1;
                c1 = choice4;
                c2 = choice2;
                c3 = choice3;
            }
            c1.text = ((BNRCard *)[array objectAtIndex:num]).question;
            c2.text = ((BNRCard *)[array objectAtIndex:num+2]).question;
        
            c3.text = ((BNRCard *)[array objectAtIndex:num+1]).question;
        
            c4.text = ((BNRCard *)[array objectAtIndex:num+3]).question;
            numbah = j;
    }
    number = numbah;
}
- (void)viewDidUnload {
    imageView = nil;
    explain1 = nil;
    explain2 = nil;
    explain = nil;
    explain1 = nil;
    explain2 = nil;
    choice1 = nil;
    choice2 = nil;
    choice3 = nil;
    choice4 = nil;
    [super viewDidUnload];
}

- (id)initWithString:(NSString *)string{
    
    item = [[[BNRItemStore sharedStore]allItems]objectAtIndex:[string integerValue]];
    return [super init];
}
-(IBAction)case1:(id)sender{
    if(number==0&&current<[array count]){
        if(current<[array count])
            [self loadQuestion:current+1];
        else
            [[self navigationController]popToRootViewControllerAnimated:YES];
    }
    
}
-(IBAction)case2:(id)sender{
    if(number==1&&current<[array count]){
        if(current<[array count])
            [self loadQuestion:current+1];
        else
            [[self navigationController]popToRootViewControllerAnimated:YES];
    }
    
}
-(IBAction)case3:(id)sender{
    if(number==2&&current<[array count]){
        if(current<[array count])
            [self loadQuestion:current+1];
        else
            [[self navigationController]popToRootViewControllerAnimated:YES];
    }
}
-(IBAction)case4:(id)sender{
    if(number==3){
        if(current<[array count])
            [self loadQuestion:current+1];
        else
            [[self navigationController]popToRootViewControllerAnimated:YES];
    }
}
@end
