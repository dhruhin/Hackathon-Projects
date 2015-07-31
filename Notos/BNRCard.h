//
//  BNRCard.h
//  Homepwner
//
//  Created by Dhruhin Kurli on 4/12/13.
//
//
#import <Foundation/Foundation.h>
#import <CoreData/CoreData.h>
@interface BNRCard : NSManagedObject
@property (nonatomic, retain) NSString * question;
@property (nonatomic, retain) NSString * answer;
@property (nonatomic, retain) NSString * explanation;
@property (nonatomic, retain) NSString * explanation1;
@property (nonatomic, retain) NSString * explanation2;
@property (nonatomic, retain) NSData * thumbnailData;
@property (nonatomic, retain) NSString * imageKey;
@property (nonatomic) int32_t serialNumber;
@property (nonatomic, strong) UIImage * thumbnail;
@property (nonatomic) double orderingValue;

- (void)setThumbnailDataFromImage:(UIImage *)image;
@end
