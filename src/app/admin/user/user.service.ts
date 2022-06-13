import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>("http://localhost:3000/users/" + id);
  }

  postUser(user: User): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<User>("http://localhost:3000/users", user, {headers: headers});
  }

  putUser(id:number, user: User): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<User>("http://localhost:3000/users/" + id, user, {headers: headers});
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>("http://localhost:3000/users/" + id);
  }
}
