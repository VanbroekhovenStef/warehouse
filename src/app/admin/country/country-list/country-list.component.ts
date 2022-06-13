import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];
  countries$: Subscription = new Subscription();
  deleteCountry$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private statusService: CountryService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  ngOnDestroy(): void {
    this.countries$.unsubscribe();
    this.deleteCountry$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['admin/country/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/country/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteCountry$ = this.statusService.deleteCountry(id).subscribe(result => {
      //all went well
      this.getCountries();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getCountries() {
    this.countries$ = this.statusService.getCountries().subscribe(result => this.countries = result);
  }

}
