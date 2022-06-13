import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryModule } from './country/country.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CountryModule,
    SharedModule,
    AdminRoutingModule,
    UserModule
  ],
  exports: [
    CountryModule,
    UserModule
  ]
})
export class AdminModule { }
