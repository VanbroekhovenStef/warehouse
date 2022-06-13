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
    return this.httpClient.get<Address[]>("https://localhost:44306/api/addresses");
  }

  getAddressById(id: number): Observable<Address> {
    return this.httpClient.get<Address>("https://localhost:44306/api/addresses/" + id);
  }

  postAddress(address: Address): Observable<Address> {
    return this.httpClient.post<Address>("https://localhost:44306/api/addresses", address);
  }

  putAddress(id:number, address: Address): Observable<Address> {
    return this.httpClient.put<Address>("https://localhost:44306/api/addresses/" + id, address);
  }

  deleteAddress(id: number): Observable<Address> {
    return this.httpClient.delete<Address>("https://localhost:44306/api/addresses/" + id);
  }
}
