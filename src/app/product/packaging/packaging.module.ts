import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagingListComponent } from './packaging-list/packaging-list.component';
import { PackagingFormComponent } from './packaging-form/packaging-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PackagingComponent } from './packaging.component';
import { PackagingService } from './packaging.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/security.interceptor';



@NgModule({
  declarations: [
    PackagingComponent,
    PackagingListComponent,
    PackagingFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PackagingComponent,
    PackagingListComponent,
    PackagingFormComponent
  ],
  providers: [
    PackagingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class PackagingModule { }
