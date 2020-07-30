import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logo = {
    name: 'WIDELEC',
    imageUrl: '/assets/widelec-logo.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
