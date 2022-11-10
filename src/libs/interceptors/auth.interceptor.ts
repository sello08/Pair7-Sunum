import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  //   const token = this.localStorageService.getToken();
  //   if(token !== null){
  //     request.headers.append('Authorization', 'Bearer ' + token)
  //   }

  //   return next.handle(request);
  // }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(this.authService.isAuthenticated){
   let newRequest=request.clone({
    setHeaders: { Authorization: `Bearer ${this.authService.jwtToken}` },
    });
     return next.handle(newRequest);
   }
      return next.handle(request);
    }

}
