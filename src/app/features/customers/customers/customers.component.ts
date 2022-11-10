import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { Customer } from 'src/libs/models/customer';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { CustomersService } from 'src/libs/services/customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers!: Customer[]
  corporateCustomers?: CorporateCustomers[];
  individualCustomers?: IndividualCustomers[];

  //search
  searchCompanyName!:string;
  searchTaxNumber!:number;
  searchBirthDate!:string;
  searchLastName!:string
  searchFirtName!:string
  searchId!:number

  
  showCorpCustomersList :boolean = false
  showIndCustomersList :boolean = false

  constructor(private customersService: CustomersService , private router:Router) {}

  ngOnInit(): void {
  }

  //customers
  getByCustomers(): void {
    this.customersService.getCustomer().subscribe((response) => {
    this.customers = response;
    });
  }
  //individualCustomers
  getByIndividualCustomers(): void {
   
      this.customersService.getIndividualCustomers().subscribe((response) => {
      this.individualCustomers = response;
      this.showCorpCustomersList = false;
      this.showIndCustomersList = true;
   
    });
  }
  //corporateCustomers
  getByCorporateCustomers(): void {
 
    this.customersService.getCorporateCustomers().subscribe((response) => {
      this.corporateCustomers = response;
      this.showCorpCustomersList = true;
      this.showIndCustomersList = false;
 
    });
  }
  
  showDetails(id:number | undefined){
    //queryParams--sor
    // this.router.navigate(['customers/details'],{queryParams: {customerId:id}})
    this.router.navigate(['customers/details',id]);
    console.log(id);
    
  }


  clearFilter(){
    this.searchCompanyName=""
    // this.searchTaxNumber=0
    this. searchBirthDate=""
    this.searchLastName=""
    this.searchFirtName=""
    // this.searchId =0

    
  }
  
  createCustomers(){
    this.router.navigate(['/customers/stp1'])
  }



}
