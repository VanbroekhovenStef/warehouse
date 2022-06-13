import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
