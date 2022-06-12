import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemService } from './item.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemComponent } from './item.component';
import { SecurityInterceptor } from 'src/app/security/security.interceptor';



@NgModule({
  declarations: [
    ItemComponent,
    ItemListComponent,
    ItemFormComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ItemComponent,
    ItemListComponent,
    ItemFormComponent
  ],
  providers: [
    ItemService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class ItemModule { }
