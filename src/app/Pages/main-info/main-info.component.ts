import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink() {
    window.open('https://youtu.be/CHd4Xev4XyY', '_blank');
  }

}
