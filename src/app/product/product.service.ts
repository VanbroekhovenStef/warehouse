import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { 
  }

  getProducts(): Observable<Product[]> {
    // return timer(1, 3000).pipe(switchMap(() => ));
    return this.httpClient.get<any>("http://localhost:3000/products");
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:3000/products/" + id);
  }
}

