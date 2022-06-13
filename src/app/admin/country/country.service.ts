import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  // getCountries(): Observable<Country[]> {
  //   return this.httpClient.get<Country[]>("http://localhost:3000/countries");
  // }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>("https://localhost:44306/api/countries");
  }

  // getCountryById(id: number): Observable<Country> {
  //   return this.httpClient.get<Country>("http://localhost:3000/countries/" + id);
  // }

  getCountryById(id: number): Observable<Country> {
    return this.httpClient.get<Country>("https://localhost:44306/api/countries/" + id);
  }

  // postCountry(country: Country): Observable<Country> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  //   return this.httpClient.post<Country>("http://localhost:3000/countries", country, {headers: headers});
  // }

  postCountry(country: Country): Observable<Country> {
    console.log(country);
    return this.httpClient.post<Country>("https://localhost:44306/api/countries", country);
  }

  putCountry(id:number, country: Country): Observable<Country> {
    console.log(country)
    return this.httpClient.put<Country>("https://localhost:44306/api/countries/" + id, country);
  }

  deleteCountry(id: number): Observable<Country> {
    return this.httpClient.delete<Country>("https://localhost:44306/api/countries/" + id);
  }
}
