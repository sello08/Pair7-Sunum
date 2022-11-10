import { resetCustomerState } from './../../../../store/customer.actions';
import { Component, OnInit } from '@angular/core';
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

 
  selectedService !: number | undefined  ;
  serviceSave  !: Service | null;
  indCustomerSave  !: IndividualCustomers | null
  corpCustomerSave  !: CorporateCustomers | null
  subscriptionId !: number;
  

  constructor(
    private store : Store, 
    private router: Router, 
    private customerService:CustomersService, 
    private toastr :ToastrService,
    ) { }

  ngOnInit(): void {

    // service ve cseçilen customerın storedan çekilip local değişkenlerde tutulması.....



    this.store.select(serviceSelector).subscribe(response => { this.serviceSave = response })
    

    
    this.store.select(indCustomerSelector).subscribe(response => {this.indCustomerSave = response})
    

   
    this.store.select(corpCustomerSelector).subscribe(response => {this.corpCustomerSave = response})
   
 
  }

   saveCustomer(){

    this.store.select(serviceSelector).subscribe(response => {
      this.selectedService = response?.id})
    
    

    
    if(this.corpCustomerSave){

     let customerId = Math.round(Math.random()*100000);

      this.customerService.addCorporateCustomer({...this.corpCustomerSave, customerId: customerId})
        .subscribe(response => { this.store.dispatch(resetCustomerState());  // Save işleminden sonra var olan state bir sonraki kayıt işlmei için sıfırlanır...   
        
        this.toastr.success('Customer başarıyla eklendi')
      }, this.catchError)
      if(this.selectedService){
        this.customerService.addSubscriptions(customerId, this.selectedService)
        .subscribe(response => {
          
          this.customerService.addInvoices(response.id).subscribe(response => {
            
          }, this.catchError)
        }, this.catchError);}
      
    }
    if(this.indCustomerSave){

      const customerId = Math.round(Math.random()*100000);

      this.customerService.addIndividualCustomer({...this.indCustomerSave, customerId: customerId})
      .subscribe(response => { this.store.dispatch(resetCustomerState());   // Save işleminden sonra var olan state bir sonraki kayıt işlmei için sıfırlanır...
       
      this.toastr.success('Customer başarıyla eklendi')
      }, this.catchError)
      if(this.selectedService){
        this.customerService.addSubscriptions(customerId, this.selectedService)
        .subscribe(response => {
          this.customerService.addInvoices(response.id).subscribe(response => {
          }, this.catchError)
        }, this.catchError);
      }
       

    }
  
    this.toastr.success(  "New Customer Created")
    this.router.navigate(['/customers/']);
  }
  catchError(error: Error) {
    this.toastr.success('Bir hata olustu ' + error.message)
  }
  
}