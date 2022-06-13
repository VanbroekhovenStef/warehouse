import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/address/address';
import { Country } from 'src/app/admin/country/country';
import { AuthService } from 'src/app/security/auth.service';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

  country: Country = { id: 0, name: "", maxWeight: 0}

  @Input() address: Address = { id: 0, street: "", city:"", countryId: 0, country: this.country }

  orders: Order[] = [];
  orders$: Subscription = new Subscription();
  deleteOrder$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private orderService: OrderService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  ngOnDestroy(): void {
    this.orders$.unsubscribe();
    this.deleteOrder$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['neworder']);
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['editorder/' + id]);
  }

  delete(id: number) {
    this.deleteOrder$ = this.orderService.deleteOrder(id).subscribe(result => {
      //all went well
      this.getOrders();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getOrders() {
    this.orders$ = this.orderService.getOrdersFromUser().subscribe(result => this.orders = result);
  }

  isUnConfirmed(order: Order): boolean {
    return order.confirm;
  }

  confirm(orderId: number): void {
    this.orderService.confirmOrder(orderId).subscribe(result => {
      this.getOrders();
    }, error => {
      this.errorMessage = error.message;
    })
  }

  

}
