export interface Product {
    id?:                    string;
    name?:                  string;
    barcode?:               null | string;
    description?:           null | string;
    quantity:              number;
    unitCost?:              number;
    price?:                 number;
    taxPercentage?:         number;
    promotionAmount?:       number;
    imageURL?:              null | string;
    imageData?:             null | string;
    status?:                null | string;
    deliveryTime?:          null | string;
    storeProductImageList: StoreProductImageList[];
}

export interface StoreProductImageList {
    id?:                   string;
    imageURL?:             null;
    imageData:            string;
    registrationDateTime?: Date;
    storeProductId?:       string;
    storeProduct?:         null;
}
