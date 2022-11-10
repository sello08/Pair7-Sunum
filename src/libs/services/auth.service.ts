import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { Users } from '../models/users';
import { LoginResponse } from '../models/login-response';
import { LocalStorageService } from './local-storage.service';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connection = environment.api.Url

  constructor(
    private http: HttpClient ,
    private localStorageService:LocalStorageService,
    private jwtHelperService:JwtHelperService,
    private router:Router) {
  }

  signUp(UserModel:Users): Observable<Users> {
  return  this.http.post<Users>(this.connection.users,UserModel)
  }

  login(UserModel:Users): Observable <LoginResponse>{
   return this.http.post<LoginResponse>(this.connection.auth,UserModel)
  }
  getusers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.connection.users);
  }

  logoutToken(){
    // localStorage.removeItem("token");
    this.localStorageService.clearToken();
    this.router.navigate(['/']);
  }

  get isAuthenticated():boolean{
    // token yoksa false
    let token=this.localStorageService.getToken();
    if(!token)return false;
    if(this.jwtHelperService.isTokenExpired())return false;
    //var süresi geçmişşse  false
    return true;
  }

   get jwtToken():string | null{
    return this.localStorageService.getToken();
   }


}

