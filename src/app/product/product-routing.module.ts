import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ItemFormComponent } from './item/item-form/item-form.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { PackagingFormComponent } from './packaging/packaging-form/packaging-form.component';
import { PackagingListComponent } from './packaging/packaging-list/packaging-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {path: 'stock', component: ProductComponent},
    {path: 'item', component: ItemListComponent},
    {path: 'item/form', component: ItemFormComponent},
    {path: 'packaging', component: PackagingListComponent},
    {path: 'packaging/form', component: PackagingFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}