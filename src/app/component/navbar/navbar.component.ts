import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  LocalStorageService} from 'src/libs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean =false;
  constructor(private local:LocalStorageService, private toastr:ToastrService) { 

  }
  
  token:any=this.local.getToken();
 
ngOnInit(): void {
  }

  loggedin(){
    return this.local.getToken();
  }
 
  onLogut() {
   this.local.logut();
    this.isAuthenticated=false;
    console.log("token silindi")
    this.toastr.warning("Token Deleted")
  }



}
