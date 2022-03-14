import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Items/nav-bar/nav-bar.component';
import { InfoPageComponent } from './Pages/info-page/info-page.component';
import { PricePageComponent } from './Pages/price-page/price-page.component';
import { StorePageComponent } from './Pages/store-page/store-page.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './Items/footer/footer.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { MainInfoComponent } from './Pages/main-info/main-info.component';
import { ContactServiceService } from './Services/contact-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfoPageComponent,
    PricePageComponent,
    StorePageComponent,
    ContactComponent,
    FooterComponent,
    LandingComponent,
    MainInfoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
