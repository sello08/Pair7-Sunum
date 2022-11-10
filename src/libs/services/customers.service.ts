

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { year } from '@igniteui/material-icons-extended';
import {Observable } from 'rxjs'
import { environment } from 'src/environments/environment';
import { CorporateCustomers } from '../models/corporate-customers';
import { Customer } from '../models/customer';
import { IndividualCustomers } from '../models/individual-customers';
import { Invoice } from '../models/invoice';
import { Subscription } from '../models/subscription';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

   dateObj = new Date();
   month = this.dateObj.getUTCMonth() + 1; //months from 1-12
   subYear = this.dateObj.getUTCFullYear() + 1
   day = this.dateObj.getUTCDate();
   year = this.dateObj.getUTCFullYear();

   newdate = this.year + "-" + this.month + "-" + this.day;
   subNewDate = this.subYear + "-" + this.month + "-" + this.day;

  connections=environment.api
  constructor(private http:HttpClient) {}
   

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.connections.Url.customers.customers);
  }

 //getIndividualCustomers
 
  getIndividualCustomers():Observable<IndividualCustomers[]>{
    return this.http.get<IndividualCustomers[]>(this.connections.Url.customers.individualCustomers)
  }


  getIndividualCustomerDetail(id: number): Observable<IndividualCustomers[]>{
    return this.http.get<IndividualCustomers[]>('http://localhost:3000/individualCustomers?customerId='+id)
  }


  //CorporateCustomers

  getCorporateCustomers():Observable<CorporateCustomers[]>{
    return this.http.get<CorporateCustomers[]>(this.connections.Url.customers.corporateCustomers)
   }
 

  getCorporateCustomersDetail(id:number):Observable<CorporateCustomers[]>{
    return this.http.get<CorporateCustomers[]>('http://localhost:3000/corporateCustomers?customerId='+id)
   }


//subscriptions
  getsubscriptions():Observable<Subscription[]>{
    return this.http.get<Subscription[]>(this.connections.Url.customers.subscription)
  }
  getsubscriptionsDetail(id:number):Observable<Subscription[]>{
    return this.http.get<Subscription[]>('http://localhost:3000/subscriptions?customerId'+id)
  }


  addCorporateCustomer(customer : any):Observable<CorporateCustomers>{
    return this.http.post<CorporateCustomers>('http://localhost:3000/corporateCustomers', customer)
  }

  addIndividualCustomer(customer : IndividualCustomers):Observable<IndividualCustomers>{
    return this.http.post<IndividualCustomers>('http://localhost:3000/individualCustomers', customer)
  }

  addCustomer(customer : Customer):Observable<Customer>{
    return this.http.post<Customer>('http://localhost:3000/customers', customer)
  }

  addSubscriptions(id: number, serviceId : number | undefined):Observable<Subscription>{


    const data = { customerId: id ,serviceId: serviceId , dateStarted: this.newdate }
    
    return this.http.post<Subscription>('http://localhost:3000/subscriptions', data)
  }

  addInvoices(id: number ):Observable<Invoice>{

    


    const data = { subscriptionId: id , dateCreated: this.newdate, dateDue: this.subNewDate}

    return this.http.post<Invoice>('http://localhost:3000/invoices', data)
  }

  




}