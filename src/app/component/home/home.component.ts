import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/libs/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(local:LocalStorageService) { }

  ngOnInit(): void {
  }

  loggedin(){
    return localStorage.getItem('token');
  }
}
