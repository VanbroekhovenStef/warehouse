import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { SecurityModule } from './security/security.module';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AddressModule } from './address/address.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SecurityModule,
    OrderModule,
    AdminModule,
    HttpClientModule,
    AddressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
