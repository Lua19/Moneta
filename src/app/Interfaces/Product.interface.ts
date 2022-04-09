export interface Product {
    id: string;
    name: string;
    barcode: string;
    quantity: number;
    price: number;
    taxPercent: number;
    promotionAmount: number;
    salePrice: number;
    imageURL: string;
    imageData: string;
    unitCost: number;
    status: string;
    deliveryTime: string;
}