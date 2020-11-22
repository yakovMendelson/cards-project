import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoLineComponent } from './components/info-line/info-line.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { PhonesListComponent } from './components/phones-list/phones-list.component';
import { NevToolbarComponent } from './components/nev-toolbar/nev-toolbar.component';
import { PhoneItemComponent } from './components/phone-item/phone-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { PayComponent } from './components/pay/pay.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    InfoLineComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ImageSliderComponent,
    PhonesListComponent,
    NevToolbarComponent,
    PhoneItemComponent,
    SearchComponent,
    ShoppingComponent,
    PayComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
