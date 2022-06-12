import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';
import { PackagingComponent } from './packaging/packaging.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemModule } from './item/item.module';
import { PackagingModule } from './packaging/packaging.module';
import { ProductRoutingModule } from './product-routing.module';
import { SecurityInterceptor } from '../security/security.interceptor';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    ItemModule,
    PackagingModule
  ],
  exports: [
    ItemModule,
    PackagingModule,
    ProductComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class ProductModule { }
