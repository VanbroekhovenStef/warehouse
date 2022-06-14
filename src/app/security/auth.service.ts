import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UserResponse } from './userResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()){
      return { id : parseInt(localStorage.getItem('id') ?? '0') ,
        email: localStorage.getItem('email') ?? '', password: '',
        token: this.getToken(),
        role: ''  };
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(user: User): Observable<UserResponse> {
    console.log(user);
    return this.httpClient.post<UserResponse>('https://localhost:44306/api/users/authenticate', user);
  }

  register(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('http://localhost:3000/register', user);
  }

  isAdmin() {
    let admin = localStorage.getItem('role');
    return admin === 'Admin';
  }

  isWarehouse() {
    let admin = localStorage.getItem('role');
    return admin === 'Warehouse';
  }

  isCustomer() {
    let admin = localStorage.getItem('role');
    return admin === 'Customer';
  }
}
