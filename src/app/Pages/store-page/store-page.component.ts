import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  navigate(route: string){
    this.router.navigate(['/store/'+route]);
  }

}
