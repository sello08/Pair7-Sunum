import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ HttpClientModule,HTTP_INTERCEPTORS}from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { 
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
  IgxBadgeModule 
 } from "igniteui-angular";

import { SpinnerComponent } from './component/spinner/spinner.component';
import { LoadingInterceptor, LoadingService } from 'src/libs';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './component/home/home.component';
import { LoginService } from 'src/libs';
import { DetailCustomerComponent } from './component/detail-customer/detail-customer.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './store/customer.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtModule } from '@auth0/angular-jwt';


//STORE
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerComponent,
    NotFoundComponent,
    HomeComponent,
    DetailCustomerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule, 
   
      //Igx UI
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,  
    IgxBadgeModule ,

      //ngx-toastr
      ToastrModule.forRoot({
        timeOut:4000,
        progressBar:true,
        closeButton:false,
        progressAnimation:"decreasing",
        preventDuplicates:true,
        positionClass:"toast-bottom-right"
      }),
      //ToastrModule added
      //STORE

      // StoreModule.forRoot<AppStoreState>(appReducers)
     
      StoreModule.forRoot({'customer': customerReducer}),
      
      StoreDevtoolsModule.instrument({
        autoPause: false, // Pauses recording actions and state changes when the extension window is not open
      }),

      JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return localStorage.getItem('token');
          },
        },
      }),
    
  ],
  providers: [LoginService,LoadingService,{ provide: HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
