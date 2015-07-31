//
//  BNRCard.m
//  Homepwner
//
//  Created by Dhruhin Kurli on 4/12/13.
//
//

#import "BNRCard.h"

@implementation BNRCard
@dynamic question;
@dynamic answer;
@dynamic explanation;
@dynamic explanation1;
@dynamic explanation2;
@dynamic thumbnailData;
@dynamic imageKey;
@dynamic serialNumber;
@dynamic thumbnail;
@dynamic orderingValue;

- (void)awakeFromFetch
{
    [super awakeFromFetch];
    UIImage *tn = [UIImage imageWithData:[self thumbnailData]];
    [self setPrimitiveValue:tn forKey:@"thumbnail"];
}

- (void)setThumbnailDataFromImage:(UIImage *)image
{
    CGSize origImageSize = [image size];
    CGRect newRect = CGRectMake(0, 0, 40, 40);
    float ratio = MAX(newRect.size.width / origImageSize.width,
                      newRect.size.height / origImageSize.height);
    UIGraphicsBeginImageContextWithOptions(newRect.size, NO, 0.0);
    UIBezierPath *path = [UIBezierPath bezierPathWithRoundedRect:newRect
                                                    cornerRadius:5.0];
    [path addClip];
    CGRect projectRect;
    projectRect.size.width = ratio * origImageSize.width;
    projectRect.size.height = ratio * origImageSize.height;
    projectRect.origin.x = (newRect.size.width - projectRect.size.width) / 2.0;
    projectRect.origin.y = (newRect.size.height - projectRect.size.height) / 2.0;
    [image drawInRect:projectRect];
    UIImage *smallImage = UIGraphicsGetImageFromCurrentImageContext();
    [self setThumbnail:smallImage];
    NSData *data = UIImagePNGRepresentation(smallImage);
    [self setThumbnailData:data];
    UIGraphicsEndImageContext();
}
@end
