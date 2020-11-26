import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import { PhoneItemComponent } from './components/phone-item/phone-item.component';
import { SearchComponent } from './components/search/search.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { PayComponent } from './components/pay/pay.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminItemComponent } from './components/admin-item/admin-item.component';


const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path:'search',     component: SearchComponent},
    {path: 'phone/:id', component: PhoneItemComponent },
    {path: 'contact', component: ContactComponent} ,
    {path: 'shopping', component: ShoppingComponent} ,
    {path: 'pay', component: PayComponent} ,
    {path: 'login', component: LoginComponent} ,
    {path: 'signUp', component: SignUpComponent} ,
    {path: 'admin', component: AdminComponent} ,
    {path: 'admin-item/:id', component: AdminItemComponent} ,
    // {path: '**', component: PhonesListComponent },
    {path: '', component: PhonesListComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
