import { Customer } from "./customer"

export interface IndividualCustomers  extends Customer{
    customerId:number;
    firstName?:string;
    lastName?:string;
    nationalIdentity?:number;
    birthDate:string;
}