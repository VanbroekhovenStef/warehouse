import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address/address-form/address-form.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { HomeComponent } from './home/home.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { AuthGuard } from './security/auth.guard';
import { SecurityComponent } from './security/security/security.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'login', component: SecurityComponent},
  { path: 'register', component: SecurityComponent},
  { path: 'logout', component: SecurityComponent},
  { path: 'address', component: AddressListComponent },
  { path: 'address/form', component: AddressFormComponent },
  { path: 'order', component: OrderCreateComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
