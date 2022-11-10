
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CorporateCustomers, CustomersService, IndividualCustomers, Invoice, Service, ServicesService } from 'src/libs';

import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { indCustomerSelector, corpCustomerSelector, serviceSelector,  } from '../../../../store/customer.selector';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-customerstp3',
  templateUrl: './create-customerstp3.component.html',
  styleUrls: ['./create-customerstp3.component.css']
})
export class CreateCustomerstp3Component implements OnInit {

 
  selectedService !: Service ;
  selectedIndCustomer !: IndividualCustomers ;
  selectedCorpCustomer !: CorporateCustomers;
  serviceSelection !: Observable<Service | null>
  indCustomerSelection !: Observable<IndividualCustomers | null>
  corpCustomerSelection !: Observable<CorporateCustomers | null>
  serviceSave  !: Service | null;
  indCustomerSave  !: IndividualCustomers | null
  corpCustomerSave  !: CorporateCustomers | null
  deneme !: CorporateCustomers;
  deneme3 !: Invoice;
  deneme2 !: IndividualCustomers;
  subscriptionId !: number;
  

  constructor(
    private servicesService : ServicesService,
    private store : Store, 
    private router: Router, 
    private customerService:CustomersService, 
    private toastr :ToastrService
    ) { }

  ngOnInit(): void {

    this.serviceSelection = this.store.select(serviceSelector)
    this.serviceSelection.subscribe(response => { this.serviceSave = response })
    console.log(this.serviceSave ,"s")

    this.indCustomerSelection = this.store.select(indCustomerSelector)
    this.indCustomerSelection.subscribe(response => {this.indCustomerSave = response})
    console.log(this.indCustomerSave, "i")

    this.corpCustomerSelection = this.store.select(corpCustomerSelector)
    this.corpCustomerSelection.subscribe(response => {this.corpCustomerSave = response})
    console.log(this.corpCustomerSave,"c")
 
  }

   saveCustomer(){

    
    if(this.corpCustomerSave!==null){
     let customerId = Math.round(Math.random()*100);

      this.customerService.addCorporateCustomer({...this.corpCustomerSave, customerId: customerId})
      .subscribe(response => {
        this.deneme = response;
        this.toastr.success('Customer başarıyla eklendi')
      }, this.catchError)

      this.customerService.addSubscriptions(customerId, this.selectedService.id)
        .subscribe(response => {
          
          this.customerService.addInvoices(response.id).subscribe(response => {
            this.deneme3 = response
            
          }, this.catchError)
        }, this.catchError);
        
    
        this.router.navigate(['/customers']);
    }
    if(this.indCustomerSave!==null){
      const customerId = Math.round(Math.random()*100);
      this.customerService.addIndividualCustomer({...this.indCustomerSave, customerId: customerId})
      .subscribe(response => {
        this.deneme2 = response
        this.toastr.success('Customer başarıyla eklendi')
      }, this.catchError)

       this.customerService.addSubscriptions(customerId, this.selectedService.id)
        .subscribe(response => {
          this.customerService.addInvoices(response.id).subscribe(response => {
            this.deneme3 = response;
          }, this.catchError)
        }, this.catchError);

        this.router.navigate(['/customers']);
    }
  

    this.toastr.success(  "New Customer Created")
    this.router.navigate(['/customers/stp3']);

    
  }

  catchError(error: Error) {
    this.toastr.success('Bir hata olustu ' + error.message)
  }
  
}