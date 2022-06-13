import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/admin/country/country';
import { CountryService } from 'src/app/admin/country/country.service';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit, OnDestroy {

  isAdd: boolean = false;
  isEdit: boolean = false;
  addressId: number = 0;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  address$: Subscription = new Subscription();
  postAddress$: Subscription = new Subscription();
  putAddress$: Subscription = new Subscription();
  countries$: Subscription = new Subscription();

  // reactive form
  addressForm = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    countryId: new FormControl('')
  });

  countries: Country[] = [];

  constructor(private router: Router, private addressService: AddressService, private countryService: CountryService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.addressId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.addressId != null && this.addressId > 0) {
      this.address$ = this.addressService.getAddressById(this.addressId).subscribe(result => {
        this.addressForm.setValue({
          street: result.street,
          city: result.city,
          countryId: result.countryId
        });
      });
    }
  }

  ngOnInit(): void {
    this.countries$ = this.countryService.getCountries().subscribe(result => {
      this.countries = result;
    })
  }

  ngOnDestroy(): void {
    this.address$.unsubscribe();
    this.postAddress$.unsubscribe();
    this.putAddress$.unsubscribe();
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postAddress$ = this.addressService.postAddress(this.addressForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/address");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putAddress$ = this.addressService.putAddress(this.addressId, this.addressForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/address");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }
}
