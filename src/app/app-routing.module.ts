import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/guards/auth.guard';
import { LoginGuard } from 'src/libs/guards/login.guard';
import { RolesComponent } from './features/roles/roles.component';
import { ServicesComponent } from './features/service/services.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DetailCustomerComponent } from './component/detail-customer/detail-customer.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,

  },
  {
    path: "home",
    component: HomeComponent,

  },

  {

    path:"auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    ,canActivate: [LoginGuard]
  },
  {

    path:"services",
    loadChildren: () => import('./features/service/service.module').then(m => m.ServiceModule)
    , canActivate: [AuthGuard]
  },


  {
    path:"customers",
    loadChildren: () => import('./features/customers/customers/customers.module').then(m => m.CustomersModule)
    ,canActivate: [AuthGuard]
  },

  {
    path:"customers/details/:id", component:DetailCustomerComponent
    ,canActivate: [AuthGuard]
  },
  {
    path:"roles",
    loadChildren: () => import('./features/roles/roles.module').then(m => m.RolesModule)
  },

  {
    path: "**",
    component: NotFoundComponent
  }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
