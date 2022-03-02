import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Items/nav-bar/nav-bar.component';
import { InfoPageComponent } from './Pages/info-page/info-page.component';
import { PricePageComponent } from './Pages/price-page/price-page.component';
import { StorePageComponent } from './Pages/store-page/store-page.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './Items/footer/footer.component';
import { LandingComponent } from './Pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfoPageComponent,
    PricePageComponent,
    StorePageComponent,
    ContactComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
