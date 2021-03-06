import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Items/nav-bar/nav-bar.component';
import { InfoPageComponent } from './Pages/info-page/info-page.component';
import { PricePageComponent } from './Pages/price-page/price-page.component';
import { StorePageComponent } from './Pages/store-page/store-page.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './Items/footer/footer.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { MainInfoComponent } from './Pages/main-info/main-info.component';
import { ContactServiceService } from './Services/contact-service.service';
import { LoginComponent } from './Pages/login/login.component';
import { ProductComponent } from './Pages/product/product.component';
import { AuthService } from './Services/auth.service';
import { ImagePipe } from './pipes/image.pipe';
import { AdminDashboardComponent } from './Items/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './Pages/register/register.component';
import { CartComponent } from './Items/cart/cart.component';
import { UsersComponent } from './Pages/users/users.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { CartViewComponent } from './Pages/cart-view/cart-view.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { ItemPipe } from './pipes/item.pipe';

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
    MainInfoComponent,
    LoginComponent,
    ProductComponent,
    ImagePipe,
    AdminDashboardComponent,
    RegisterComponent,
    CartComponent,
    UsersComponent,
    PaymentComponent,
    CartViewComponent,
    OrdersComponent,
    ItemPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ContactServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
