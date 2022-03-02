import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { InfoPageComponent } from './Pages/info-page/info-page.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { PricePageComponent } from './Pages/price-page/price-page.component';
import { StorePageComponent } from './Pages/store-page/store-page.component';

const routes: Routes = 
  [{path: '', component: LandingComponent},
   {path: 'info', component: InfoPageComponent},
   {path: 'price', component: PricePageComponent},
   {path: 'store', component: StorePageComponent},
   {path: 'contact', component: ContactComponent},
   {path: '**', component: LandingComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
