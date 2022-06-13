import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { 
  }

  getProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products?_expand=user&_expand=item&_expand=packaging");
  }
  
  // getProducts() : Observable<Product[]> {
  //   return this.httpClient.get<Product[]>("https://localhost:44306/api/products");
  // }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:3000/products/" + id)
  }

  postProduct(product: Product): Observable<Product> {
    // Deze code is niet nodig wanneer je met een echte api werkt!!
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Product>("http://localhost:3000/products/", product, {headers: headers});
  }

  putProduct(id: number, product: Product): Observable<Product> {
    // Deze code is niet nodig wanneer je met een echte api werkt!!
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Product>("http://localhost:3000/products/" + id, product, {headers: headers});
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>("http://localhost:3000/products/" + id);
  }
}

