import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { CustomersComponent } from './customers.component';



const routes: Routes = [{
  path: "",
  component: CustomersComponent,

},
{
  path: "createCustomer",
  component: CreateCustomerComponent,
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


