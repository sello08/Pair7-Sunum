
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getServices(): Observable<Service[]>{
    
  return this.httpClient.get<Service[]>('http://localhost:3000/services')
  }

  delete(id:number): Observable<void>{
    return this.httpClient.delete<void>('http://localhost:3000/services/' + id)
  }

  add(service:Service): Observable<void>{
    return this.httpClient.post<void>('http://localhost:3000/services', service)
  }

  update(id: number,service: Service): Observable<Service> {
    return this.httpClient.put<Service>( 'http://localhost:3000/services/' + id,  service );
  }

  getServicesDetail(id:number): Observable<Service[]>{
    return this.httpClient.get<Service[]>('http://localhost:3000/services/' +id)
    }
}