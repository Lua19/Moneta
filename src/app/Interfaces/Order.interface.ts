import { Product } from "./Product.interface";

export interface Order {
    id: string;
    CompanyName: string;
    MonetaSufix: string;
    Phone: string;
    Email: string;
    Amount: number;
    MaskedCardNumber: string;
    CardExpirationDate: string;
    CardType: string;
    BillingAddress: string;
    BillingCity: string;
    BillingZip: string;
    BillingState: string;
    BillingFirstName: string;
    LastTransactionType: string;
    Status: string;
    CustomerId: string;
    Products:Product[]
}