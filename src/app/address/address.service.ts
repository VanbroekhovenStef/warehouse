import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }

  getAddresses(): Observable<Address[]> {
    return this.httpClient.get<Address[]>("http://localhost:3000/addresses");
  }

  getAddressById(id: number): Observable<Address> {
    return this.httpClient.get<Address>("http://localhost:3000/addresses/" + id);
  }

  postAddress(address: Address): Observable<Address> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Address>("http://localhost:3000/addresses", address, {headers: headers});
  }

  putAddress(id:number, address: Address): Observable<Address> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Address>("http://localhost:3000/addresses/" + id, address, {headers: headers});
  }

  deleteAddress(id: number): Observable<Address> {
    return this.httpClient.delete<Address>("http://localhost:3000/addresses/" + id);
  }
}
