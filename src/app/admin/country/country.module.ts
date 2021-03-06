import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountryService } from './country.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/security.interceptor';



@NgModule({
  declarations: [
    CountryListComponent,
    CountryFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CountryListComponent,
    CountryFormComponent
  ],
  providers: [
    CountryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class CountryModule { }
