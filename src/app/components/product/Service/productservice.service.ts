import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products/');
  }
}
