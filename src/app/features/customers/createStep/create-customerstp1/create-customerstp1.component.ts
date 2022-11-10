import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CorporateCustomers, CustomersService, IndividualCustomers, Invoice, Service, ServicesService } from 'src/libs';

import { Store } from '@ngrx/store';
import { setCorporateCustomer, setIndividualCustomer, setService } from '../../../../store/customer.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-customerstp1',
  templateUrl: './create-customerstp1.component.html',
  styleUrls: ['./create-customerstp1.component.css']
})
export class CreateCustomerstp1Component implements OnInit {


  customerType :boolean=true
   activeForm:boolean=true;
   indCustomerForm! : FormGroup
   corpCustomerForm! : FormGroup
   selectedService !: Service ;
   selectedIndCustomer !: IndividualCustomers ;
   selectedCorpCustomer !: CorporateCustomers;
   indCustomerSave  !: IndividualCustomers | null
   corpCustomerSave  !: CorporateCustomers | null
   deneme !: CorporateCustomers;
   deneme3 !: Invoice;
   deneme2 !: IndividualCustomers;

  

  constructor(
    private store : Store, 
    private router: Router, 
    private customerService:CustomersService, 
    private toastr :ToastrService
    ) { }

  ngOnInit(): void {
   
 
  }

  individualForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    nationalIdentity: new FormControl('', [Validators.required,Validators.minLength(10000000000),Validators.maxLength(99999999999)]),
    birthDate: new FormControl('',Validators.required),
  });
  corporateForm = new FormGroup({
    companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    taxNumber: new FormControl('null', [Validators.required,Validators.minLength(10000000),Validators.maxLength(99999999) ]),
  });



   typeSelection(value:boolean){
    if(value){
    this.activeForm=true;
    }else{
    this.activeForm=false;
    }
  }


  
  onSubmitIndividual(){
     this.individualForm.reset();
   }
   onSubmitCorporate(){
     this.corporateForm.reset();

   }

  addIndCustomer(){
    if (this.individualForm.invalid) {
      return;
    }

    this.store.dispatch(setIndividualCustomer({
      customer: this.individualForm.value as IndividualCustomers
    }));
    this.selectedIndCustomer = this.individualForm.value as IndividualCustomers
    this.onSubmitIndividual();
    this.router.navigate(['/customers/stp2']);
     
   }

   addCorpCustomer(){
    if (this.corporateForm.invalid) {
      return;
    }
    this.store.dispatch(setCorporateCustomer({
      customer: this.corporateForm.value as CorporateCustomers
    }));
    this.selectedCorpCustomer = this.corporateForm.value as CorporateCustomers
    this.onSubmitCorporate();
    this.router.navigate(['/customers/stp2']);
   }



   saveCustomer(){
    if(this.corpCustomerSave){
      const customerId = Math.round(Math.random()*100);

      this.customerService.addCorporateCustomer({...this.corpCustomerSave, customerId: customerId})
      .subscribe(response => {
        this.deneme = response;
        this.toastr.success('Customer başarıyla eklendi')
      }, this.catchError)

      this.customerService.addSubscriptions(customerId, this.selectedService.id)
        .subscribe(response => {
          this.toastr.success('Subscription başarıyla eklendi')
          this.customerService.addInvoices(response.id).subscribe(response => {
            this.deneme3 = response
            this.toastr.success('Invoice başarıyla eklendi')
          }, this.catchError)
        }, this.catchError);
            
    }
    if(this.indCustomerSave){
      
      const customerId = Math.round(Math.random()*100);

      this.customerService.addIndividualCustomer({...this.indCustomerSave, customerId: customerId})
      .subscribe(response => {
        this.deneme2 = response
        this.toastr.success('Customer başarıyla eklendi')
      }, this.catchError)

       this.customerService.addSubscriptions(customerId, this.selectedService.id)
        .subscribe(response => {
          this.toastr.success('Subscription başarıyla eklendi');
          this.customerService.addInvoices(response.id).subscribe(response => {
            this.deneme3 = response;
            this.toastr.success('Invoice başarıyla eklendi')
          }, this.catchError)
        }, this.catchError);
        
    }
  
  }

  catchError(error: Error) {
    this.toastr.error('Bir hata olustu ' + error.message)
  }
  
}

