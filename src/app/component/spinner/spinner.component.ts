import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/libs';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  
  isLoading: boolean = false;

  constructor(private  loadingService : LoadingService) { }

  ngOnInit(): void {
    this.subscribeToLoading();
  }


  subscribeToLoading() {
    this.loadingService.isLoadingSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
      console.log(`Is Loading değeri: ${isLoading}`);
    });
  }

startLoading() {
  this.loadingService.startLoading();
}
stopLoading() {
  this.loadingService.stopLoading();
}
}


