import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Address } from 'src/app/address/address';
import { AddressService } from 'src/app/address/address.service';
import { Status } from 'src/app/admin/status/status';
import { StatusService } from 'src/app/admin/status/status.service';
import { AuthService } from 'src/app/security/auth.service';
import { OrderService } from '../order.service';
import { StatusEnum } from '../status-enum';

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

  postOrder$: Subscription = new Subscription();
  putOrder$: Subscription = new Subscription();
  addresses$: Subscription = new Subscription();
  statuses$: Subscription = new Subscription();

// reactive form
  orderForm = new FormGroup({
    id: new FormControl(''),
    addressId: new FormControl(''),
    userId: new FormControl(''),
    statusId: new FormControl(StatusEnum.CREATED), // default status is draft
  });

  // addresses select
  addresses: Address[] = [];

  // status
  statuses: Status[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private orderService: OrderService,
              private addressService: AddressService,
              private statusService: StatusService,
              private authService: AuthService) {
    this.isAdd = this.router.url === '/neworder';
    this.isEdit = !this.isAdd;
  }

  ngOnInit(): void {
    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id != null) {
        this.orderId = +id;
        this.orderService.getOrderById(+id).subscribe(result => {
          this.orderForm.patchValue({
            id: result.id,
            userId: result.userId,
            addressId: result.addressId,
            statusId: result.statusId,
          });
        });
      }
    }

    // get categories
    this.addresses$ = this.addressService.getAddresses().subscribe(result => {
      this.addresses = result;
    });

    // get statuses
    this.statuses$ = this.statusService.getStatuses().subscribe(result => {
      this.statuses = result;
    });

    // set user in form (= author)
    const user = this.authService.getUser() ?? null;
    if (user !== null) {
      this.orderForm.patchValue({
        userId: user.id
      });
    }
  }

  ngOnDestroy(): void {
    this.postOrder$.unsubscribe();
    this.addresses$.unsubscribe();
    this.statuses$.unsubscribe();
    this.putOrder$.unsubscribe();
  }

  getTitle(): string {
    if (this.isAdd) {
      return 'Add new order';
    } else {
      return 'Edit order';
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;
  }

  submitData(): void {
    if (this.isAdd) {
      //Add
      this.postOrder$ = this.orderService.postOrder(this.orderForm.value).subscribe(result => {
          this.router.navigateByUrl('/');
        },
        error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    } else {
      //edit
      this.putOrder$ = this.orderService.putOrder(this.orderId, this.orderForm.value).subscribe(result => {
          this.router.navigateByUrl('/');
        },
        error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }
  }


}
