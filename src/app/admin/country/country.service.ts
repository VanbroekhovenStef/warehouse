import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>("http://localhost:3000/countries");
  }

  getCountryById(id: number): Observable<Country> {
    return this.httpClient.get<Country>("http://localhost:3000/countries/" + id);
  }

  postCountry(country: Country): Observable<Country> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Country>("http://localhost:3000/countries", country, {headers: headers});
  }

  putCountry(id:number, country: Country): Observable<Country> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Country>("http://localhost:3000/countries/" + id, country, {headers: headers});
  }

  deleteCountry(id: number): Observable<Country> {
    return this.httpClient.delete<Country>("http://localhost:3000/countries/" + id);
  }
}
