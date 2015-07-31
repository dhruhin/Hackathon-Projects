//
//  BNRItem.h
//  Homepwner
//
//  Created by joeconway on 9/27/11.
//  Copyright (c) 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreData/CoreData.h>

@class BNRCard;
@interface BNRItem : NSManagedObject
{
    NSMutableArray *allItems;
    NSMutableArray *allAssetTypes;
    NSManagedObjectContext *context;
    NSManagedObjectModel *model;
}

+ (BNRItem *)sharedStore;

- (void)removeItem:(BNRCard *)p;

- (NSArray *)allItems;

- (BNRCard *)createItem;

- (void)moveItemAtIndex:(int)from
                toIndex:(int)to;

- (NSString *)itemArchivePath;

- (BOOL)saveChanges;

- (void)loadAllItems;

-(void)read;

@property (nonatomic, retain) NSString * itemName;
@property (nonatomic, retain) NSString *descript;
@property (nonatomic, retain) NSData * thumbnailData;
@property (nonatomic, retain) NSString * imageKey;
@property (nonatomic) int32_t * serialNumber;
@property (nonatomic, strong) UIImage * thumbnail;
@property (nonatomic) double orderingValue;
@property (nonatomic, retain) NSManagedObject *assetType;

- (void)setThumbnailDataFromImage:(UIImage *)image;
@end
