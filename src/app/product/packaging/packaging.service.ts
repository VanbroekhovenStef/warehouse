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
      return this.httpClient.get<Packaging[]>("https://localhost:44306/api/packagings");
    }

    getPackagingById(id: number): Observable<Packaging> {
      return this.httpClient.get<Packaging>("https://localhost:44306/api/packagings/" + id)
    }

    postPackaging(packaging: Packaging): Observable<Packaging> {
      return this.httpClient.post<Packaging>("https://localhost:44306/api/packagings/", packaging);
    }

    putPackaging(id: number, packaging: Packaging): Observable<Packaging> {
      return this.httpClient.put<Packaging>("https://localhost:44306/api/packagings/" + id, packaging);
    }

    deletePackaging(id: number): Observable<Packaging> {
      return this.httpClient.delete<Packaging>("https://localhost:44306/api/packagings/" + id);
    }
}
