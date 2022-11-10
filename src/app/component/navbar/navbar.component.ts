import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService, AuthService } from 'src/libs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean =false;
  constructor(private local:LocalStorageService, private toastr:ToastrService, private authService:AuthService) { 

  }
  
  token:any=this.local.getToken();
 
ngOnInit(): void {
  }

  loggedin(){
    return this.authService.isAuthenticated
  }
 
  onLogut() {
      this.authService.logoutToken();
      this.isAuthenticated=this.authService.isAuthenticated;
      console.log("token silindi")
      this.toastr.warning("Token Deleted")
      
  }



}
