import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressService } from './address.service';
import { SharedModule } from '../shared/shared.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';



@NgModule({
  declarations: [
    AddressListComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressListComponent,
    AddressFormComponent
  ],
  providers: [
    AddressService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class AddressModule { }
