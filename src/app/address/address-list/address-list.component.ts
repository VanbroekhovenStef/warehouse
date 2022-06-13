import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit, OnDestroy {
  addresses: Address[] = [];
  addresses$: Subscription = new Subscription();
  deleteAddress$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private addressService: AddressService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAddresses();
  }

  ngOnDestroy(): void {
    this.addresses$.unsubscribe();
    this.deleteAddress$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['address/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['address/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteAddress$ = this.addressService.deleteAddress(id).subscribe(result => {
      //all went well
      this.getAddresses();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getAddresses() {
    this.addresses$ = this.addressService.getAddresses().subscribe(result => this.addresses = result);
  }

}
