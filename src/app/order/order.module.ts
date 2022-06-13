import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrderCreateComponent } from './order-create/order-create.component';



@NgModule({
  declarations: [
  
    OrderCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OrderModule { }
