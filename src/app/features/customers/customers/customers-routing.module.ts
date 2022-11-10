import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { CreateCustomerstp1Component } from '../createStep/create-customerstp1/create-customerstp1.component';
import { CreateCustomerstp2Component } from '../createStep/create-customerstp2/create-customerstp2.component';
import { CreateCustomerstp3Component } from '../createStep/create-customerstp3/create-customerstp3.component';
import { CustomersComponent } from './customers.component';



const routes: Routes = [{
  path: "",
  component: CustomersComponent,

},
{
  path: "createCustomer",
  component: CreateCustomerComponent,
},
{
  path:"stp1",
  component:CreateCustomerstp1Component
},
{
  path:"stp2",
  component:CreateCustomerstp2Component
},
{
  path:"stp3",
  component:CreateCustomerstp3Component
}

// {
//   path: "**",
//   redirectTo: "/customers",
//   pathMatch: "full"
// }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }


