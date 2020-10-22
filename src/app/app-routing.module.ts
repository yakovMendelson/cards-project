import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import { PhoneItemComponent } from './components/phone-item/phone-item.component';
import { SearchComponent } from './components/search/search.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { PayComponent } from './components/pay/pay.component';


const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path:'search',     component: SearchComponent},
    {path: 'phone/:id', component: PhoneItemComponent },
    {path: 'contact', component: ContactComponent} ,
    {path: 'shopping', component: ShoppingComponent} ,
    {path: 'pay', component: PayComponent} ,
    // {path: '**', component: PhonesListComponent },
    {path: '', component: PhonesListComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
