import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OrderListComponent,
    OrderFormComponent
  ],
  providers: [
    OrderService
  ]

})
export class OrderModule { }
