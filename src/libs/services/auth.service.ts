import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'
import { Users } from '../models/users';
import { LoginResponse } from '../models/login-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connection = environment.api.Url

  constructor(private http: HttpClient) {
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


}

