import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersService } from 'src/libs/services/customers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirtNamePipe, LastNamePipe, CustomerIdPipe, TaxNumberPipe, CompanyNamePipe, BirthDatePipe } from 'src/libs';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import {
  IgxButtonModule,
  IgxIconModule,
  IgxDatePickerModule ,
  IgxRadioModule ,
  IgxInputGroupModule,
} from "igniteui-angular";

import { CreateCustomerstp2Component } from '../createStep/create-customerstp2/create-customerstp2.component';
import { CreateCustomerstp3Component } from '../createStep/create-customerstp3/create-customerstp3.component';
import { CreateCustomerstp1Component } from '../createStep/create-customerstp1/create-customerstp1.component';



@NgModule({
  declarations: [

    CustomersComponent,
    FirtNamePipe,
    LastNamePipe,
    CustomerIdPipe,
    TaxNumberPipe,
    CompanyNamePipe,
    BirthDatePipe,
    CreateCustomerComponent,
  
    CreateCustomerstp1Component,
    CreateCustomerstp2Component,
    CreateCustomerstp3Component,


  ],
  imports: [
    CommonModule,
    CustomersRoutingModule, 
    FormsModule,
    ReactiveFormsModule,

    // uI
   IgxButtonModule,
   IgxIconModule,
   IgxInputGroupModule,
   IgxDatePickerModule,
   IgxRadioModule 


  ],
  providers: [CustomersService]
})
export class CustomersModule { }
