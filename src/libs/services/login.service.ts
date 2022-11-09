import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn=false;
  token:any;
  constructor(private local:LocalStorageService) { }

  login(){
    this.isLoggedIn=!this.isLoggedIn
  }
  




}
