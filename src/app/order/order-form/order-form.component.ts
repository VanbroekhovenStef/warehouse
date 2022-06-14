import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/address/address';
import { AddressService } from 'src/app/address/address.service';
import { AuthService } from 'src/app/security/auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  orderId: number = 0;
  isAdd: boolean = false;
  isEdit: boolean = false;

  isSubmitted: boolean = false;
  errorMessage: string = '';

  order$: Subscription = new Subscription();
  postOrder$: Subscription = new Subscription();
  putOrder$: Subscription = new Subscription();
  addresses$: Subscription = new Subscription();
  statuses$: Subscription = new Subscription();

// reactive form
  orderForm = new FormGroup({
    addressId: new FormControl(''),
    userId: new FormControl(''),
    confirm: new FormControl(false)
  });

  // addresses select
  addresses: Address[] = [];

  constructor(private router: Router, private orderService: OrderService, private addressService: AddressService, private authService: AuthService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.orderId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.orderId != null && this.orderId > 0) {
      this.order$ = this.orderService.getOrderById(this.orderId).subscribe(result => {
        this.orderForm.setValue({
          addressId: result.addressId,
          userId: result.userId,
          confirm: result.confirm
        });
      });
    }
  }

  ngOnInit(): void {
    this.addresses$ = this.addressService.getAddresses().subscribe(result => {
      this.addresses = result;
    });

    const user = this.authService.getUser() ?? null;
    if (user !== null) {
      this.orderForm.patchValue({
        userId: user.id,
        confirm: false
      });
    }
  }

  ngOnDestroy(): void {
    this.order$.unsubscribe();
    this.postOrder$.unsubscribe();
    this.putOrder$.unsubscribe();
    this.addresses$.unsubscribe();
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postOrder$ = this.orderService.postOrder(this.orderForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/order");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putOrder$ = this.orderService.putOrder(this.orderId, this.orderForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/order");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }


}
