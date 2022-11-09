import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private router:Router) { }
  
  setToken(token: string): void {
    localStorage.setItem("token", token)
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  clearToken(){
    localStorage.removeItem('token');
  }
  AllToken(){
    localStorage.clear();
  }
  logut() {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }
  


}
