import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatusService } from './status.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/security.interceptor';



@NgModule({
  declarations: [
    StatusListComponent,
    StatusFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    StatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class StatusModule { }
