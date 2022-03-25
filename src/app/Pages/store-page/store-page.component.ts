import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {

  constructor(private router : Router) { }

  navigate(route: string){
    this.router.navigate(['/store/'+route]);
  }
}
