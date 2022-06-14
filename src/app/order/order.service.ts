import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../security/auth.service';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>("https://localhost:44306/api/orders");
  }

  // getOrdersFromUser(): Observable<Order[]> {
  //   return this.httpClient.get<Order[]>('https://localhost:44306/api/orders?userId=' + this.authService.getUser()?.id + '&_expand=address&_expand=user&_embed=orderlines');
  // }

  getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>("https://localhost:44306/api/orders/" + id);
  }

  postOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>("https://localhost:44306/api/orders", order);
  }

  putOrder(id:number, order: Order): Observable<Order> {
    return this.httpClient.put<Order>("https://localhost:44306/api/orders/" + id, order);
  }

  deleteOrder(id: number): Observable<Order> {
    return this.httpClient.delete<Order>("https://localhost:44306/api/orders/" + id);
  }

  confirmOrder(id: number): Observable<Order> {
    return this.getOrderById(id).pipe(
      switchMap(order => {
        order.confirm = true;
        return this.putOrder(id, order);
      })
    )
  }
}
