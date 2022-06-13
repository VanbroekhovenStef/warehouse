import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss']
})
export class CountryFormComponent implements OnInit {

  isAdd: boolean = false;
  isEdit: boolean = false;
  countryId: number = 0;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  maxWeightChanges: string = '';

  country$: Subscription = new Subscription();
  postCountry$: Subscription = new Subscription();
  putCountry$: Subscription = new Subscription();

  // reactive form
  countryForm = new FormGroup({
    name: new FormControl(''),
    maxWeight: new FormControl('')
  });

  constructor(private router: Router, private countryService: CountryService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.countryId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.countryId != null && this.countryId > 0) {
      this.country$ = this.countryService.getCountryById(this.countryId).subscribe(result => {
        this.countryForm.setValue({
          name: result.name,
          maxWeight: result.maxWeight
        });
      });
    }
  }

  ngOnInit(): void {
    this.onChanges();
  }

  ngOnDestroy(): void {
    this.country$.unsubscribe();
    this.postCountry$.unsubscribe();
    this.putCountry$.unsubscribe();
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postCountry$ = this.countryService.postCountry(this.countryForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/country");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putCountry$ = this.countryService.putCountry(this.countryId, this.countryForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/country");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

  onChanges(): void {
    this.countryForm.get('maxWeight')?.valueChanges.subscribe(val => {
      this.maxWeightChanges = `Value of 'max weight' changed to: ${val}`
    })
  }

}
