import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './Guards/admin-guard.guard';
import { AuthGuard } from './Guards/auth.guard';
import { CartViewComponent } from './Pages/cart-view/cart-view.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { MainInfoComponent } from './Pages/main-info/main-info.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { PricePageComponent } from './Pages/price-page/price-page.component';
import { ProductComponent } from './Pages/product/product.component';
import { RegisterComponent } from './Pages/register/register.component';
import { StorePageComponent } from './Pages/store-page/store-page.component';
import { UsersComponent } from './Pages/users/users.component';

const routes: Routes = 
  [{path: '', component: LandingComponent},
   {path: 'info', component: MainInfoComponent},
   {path: 'price', component: PricePageComponent},
   {path: 'contact', component: ContactComponent},
   {path: 'orders', component: OrdersComponent},
   {path: 'cart', component: CartViewComponent},
   {path: 'store', component: StorePageComponent, canActivate: [AuthGuard]},
   {path: 'store/products', component: ProductComponent, canActivate: [AdminGuardGuard]},
   {path: 'store/users', component: UsersComponent, canActivate: [AdminGuardGuard]},
   {path: 'store/payment', component: PaymentComponent},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: '**', component: LandingComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
