import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryModule } from './country/country.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UserModule } from './user/user.module';
import { StatusModule } from './status/status.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CountryModule,
    SharedModule,
    AdminRoutingModule,
    UserModule,
    StatusModule
  ],
  exports: [
    CountryModule,
    UserModule,
    StatusModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
