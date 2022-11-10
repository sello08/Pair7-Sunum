import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { CustomerState } from 'src/app/store/customer.reducer';
import { Users } from 'src/libs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserModel$!: Observable<Users | null>
  userInfo!:Users
userName!:string |undefined
password!:string |undefined
  constructor(  private store:Store<CustomerState>) { }

  ngOnInit(): void {

this.UserModel$= this.store.select((s) => s.UserModel);
//  console.log(this.UserModel$);
this.UserModel$.subscribe((s)=>{
  this.userName=s?.userName
  this.password=s?.password
}
  )
  }

  
  // this.UserModel$= this.store.select((s) => s.auth.UserModel);
  // //  console.log(this.UserModel$);
  // this.UserModel$.subscribe((res)=>this.userInfo=res);
  // console.log(this.userInfo);


}
