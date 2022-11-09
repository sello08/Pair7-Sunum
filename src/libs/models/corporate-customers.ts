import { Customer } from "./customer"

export interface CorporateCustomers extends Customer{
    customerId:number;
    companyName?: string;
    taxNumber?: number;
}
