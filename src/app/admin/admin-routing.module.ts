import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CountryFormComponent } from './country/country-form/country-form.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
    {path: 'country', component: CountryListComponent},
    {path: 'country/form', component: CountryFormComponent},
    {path: 'user', component: UserListComponent},
    {path: 'user/form', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}