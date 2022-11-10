import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CorporateCustomers, CustomersService, IndividualCustomers, Invoice, Service, ServicesService } from 'src/libs';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { setCorporateCustomer, setIndividualCustomer, setService } from '../../../store/customer.actions';
import { indCustomerSelector, corpCustomerSelector, serviceSelector,  } from '../../../store/customer.selector';
import { ToastrService } from 'ngx-toastr';

 
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerType :boolean=true
  activeForm:boolean=true;

  indCustomerForm! : FormGroup
  corpCustomerForm! : FormGroup
  
  showIndCustomer : boolean = false;
  showCorpCustomer : boolean = false;
  services : Service[] = [];
  servicelist : boolean = false;
  selectedService !: Service ;
  selectedIndCustomer !: IndividualCustomers ;
  selectedCorpCustomer !: CorporateCustomers;
  showCustomerInfos : boolean = false;
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
    private customerService:CustomersService, 
    private toastr :ToastrService
    ) { }

  ngOnInit(): void {
    this.getService();
 
  }

  individualForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    nationalIdentity: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    birthDate: new FormControl('',Validators.required),
  });
  corporateForm = new FormGroup({
    companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    taxNumber: new FormControl('null', [Validators.required,Validators.minLength(3),Validators.maxLength(100) ]),
  });

getService(){
  this.servicesService.getServices().subscribe((res)=>{
    this.services=res;
  })
}

  typeSelection(value:boolean){
    if(value){
    this.activeForm=true;
    }else{
    this.activeForm=false;
    }
  }


  // ----------------222
  // CorpCustomer(){
  //   this.indCustomerForm = false;
  //   this.corpCustomerForm = true;
  // }
  
  onSubmitIndividual(){
     this.individualForm.reset();
     this.customerType = false;
     this.servicelist = true;
   }
   onSubmitCorporate(){
     this.corporateForm.reset();
     this.customerType = false;
     this.servicelist = true;
   }

  getServices(){
    this.servicesService.getServices().subscribe(response => this.services = response)
  }

  
  setIndCustomer(){
    if (this.individualForm.invalid) {
      return;
    }

    this.store.dispatch(setIndividualCustomer({
      customer: this.individualForm.value as IndividualCustomers
    }));

    this.selectedIndCustomer = this.individualForm.value as IndividualCustomers
    

    this.onSubmitIndividual();

   }

   setCorpCustomer(){
    if (this.corporateForm.invalid) {
      return;
    }

    this.store.dispatch(setCorporateCustomer({
      customer: this.corporateForm.value as CorporateCustomers
    }));

    this.selectedCorpCustomer = this.corporateForm.value as CorporateCustomers
    
    this.onSubmitCorporate();
   }


   addService(){
    this.servicelist = false
    this.showCustomerInfos = true // seçilen customera ait bilgileri save ekranında gösterir....
    if(this.selectedCorpCustomer){
      this.showCorpCustomer = true;
    }else if(this.selectedIndCustomer){
      this.showIndCustomer = true;
    }

    this.store.dispatch(setService({
      service: this.selectedService
    }));

    //this.store.select<Service[]>(selectedService).subscribe(response => this.serviceSave = response)


    //-------------------- Storedan verilerin çekilmesi. Verileri çekmeden önce observable türünde ve data türü olarak customer veya service olmasına göre interface eklemeleri yapıldı.
    
    this.store.select(serviceSelector).subscribe(response => { this.serviceSave = response })

    //this.indCustomerSelection = this.store.select(indCustomerSelector)
    this.store.select(indCustomerSelector).subscribe(response => {this.indCustomerSave = response})

    //this.corpCustomerSelection = this.store.select(corpCustomerSelector)
    this.store.select(corpCustomerSelector).subscribe(response => {this.corpCustomerSave = response})
   }
  
   saveCorpCustomer(){
    
      const customerId = Math.round(Math.random()*1000000);

      this.customerService.addCorporateCustomer({...this.corpCustomerSave, customerId})
      .subscribe(response => {
        //this.deneme = response;
       this.toastr.success('Customer başarıyla eklendi')
        console.log("sello", response);
      }, (error: Error) => {
        console.log("hatttaa", error.message);
        
      });
      

      this.customerService.addSubscriptions(customerId, this.selectedService.id)
        .subscribe(response => {
          this.customerService.addInvoices(response.id).subscribe(response => {
            this.deneme3 = response
          })
        });
     
    }
    saveIndCustomer(){
      if(this.indCustomerSave){
        const customerId = Math.round(Math.random()*1000000);
  
        this.customerService.addIndividualCustomer({...this.indCustomerSave, customerId})
        .subscribe(response => {
          this.deneme = response;
          this.toastr.success('Customer başarıyla eklendi')
          
          
        })
  
        this.customerService.addSubscriptions(customerId, this.selectedService.id)
          .subscribe(response => {
            this.customerService.addInvoices(response.id).subscribe(response => {
              this.deneme3 = response
            })
          }); 
      }
    }
    
}


  



