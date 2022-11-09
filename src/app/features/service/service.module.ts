import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceRoutingModule } from './service-routing.module';

import { ServicesService } from 'src/libs';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers:[ServicesService]
  
})
export class ServiceModule { }


