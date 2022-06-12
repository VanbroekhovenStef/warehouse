import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Packaging } from './packaging';

@Injectable({
  providedIn: 'root'
})
export class PackagingService {

  constructor(private httpClient : HttpClient) { }
    getPackagings() : Observable<Packaging[]> {
      return this.httpClient.get<Packaging[]>("http://localhost:3000/packagings");
    }

    getPackagingById(id: number): Observable<Packaging> {
      return this.httpClient.get<Packaging>("http://localhost:3000/packagings/" + id)
    }

    postPackaging(packaging: Packaging): Observable<Packaging> {
      // Deze code is niet nodig wanneer je met een echte api werkt!!
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');

      return this.httpClient.post<Packaging>("http://localhost:3000/packagings/", packaging, {headers: headers});
    }

    putPackaging(id: number, packaging: Packaging): Observable<Packaging> {
      // Deze code is niet nodig wanneer je met een echte api werkt!!
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');

      return this.httpClient.put<Packaging>("http://localhost:3000/packagings/" + id, packaging, {headers: headers});
    }

    deletePackaging(id: number): Observable<Packaging> {
      return this.httpClient.delete<Packaging>("http://localhost:3000/packagings/" + id);
    }
}
