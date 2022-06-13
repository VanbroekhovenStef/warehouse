import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../security/auth.service';
import { Order } from './order';
import { StatusEnum } from './status-enum';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>("http://localhost:3000/orders/");
  }

  getOrdersFromUser(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('http://localhost:3000/orders?userId=' + this.authService.getUser()?.id + '&_expand=address&_expand=user&_embed=orderlines');
  }

  getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>("http://localhost:3000/orders/" + id);
  }

  postOrder(order: Order): Observable<Order> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Order>("http://localhost:3000/orders", order, {headers: headers});
  }

  putOrder(id:number, order: Order): Observable<Order> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Order>("http://localhost:3000/orders/" + id, order, {headers: headers});
  }

  deleteOrder(id: number): Observable<Order> {
    return this.httpClient.delete<Order>("http://localhost:3000/orders/" + id);
  }

  confirmOrder(id: number): Observable<Order> {
    return this.getOrderById(id).pipe(
      switchMap(order => {
        order.statusId = StatusEnum.PROCESSED;
        return this.putOrder(id, order);
      })
    )
  }
}
