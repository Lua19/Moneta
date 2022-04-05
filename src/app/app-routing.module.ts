import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { ContactComponent } from './Pages/contact/contact.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { MainInfoComponent } from './Pages/main-info/main-info.component';
import { PricePageComponent } from './Pages/price-page/price-page.component';
import { ProductComponent } from './Pages/product/product.component';
import { RegisterComponent } from './Pages/register/register.component';
import { StorePageComponent } from './Pages/store-page/store-page.component';

const routes: Routes = 
  [{path: '', component: LandingComponent},
   {path: 'info', component: MainInfoComponent},
   {path: 'price', component: PricePageComponent},
   {path: 'store', component: StorePageComponent},
   {path: 'contact', component: ContactComponent},
   {path: 'store', component: StorePageComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
   {path: 'store/products', component: ProductComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: '**', component: LandingComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
