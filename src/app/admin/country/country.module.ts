import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CountryListComponent,
    CountryFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CountryModule { }
