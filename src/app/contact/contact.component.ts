import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  rows = '3';
  cols = '6';
  metod = 'GET';
  action = 'https://script.google.com/macros/s/AKfycbwca8wFuvhmzafTBgy1q97sN0suKtBWTGbABABC/exec';

  submit(f) {
    console.log(f);
  }

  log(x) {
    console.log(x);
  }

  src = 'assets/img/around-the-globe-travel.jpg';
  alt = 'Contact us';

  constructor() { }

  ngOnInit() {
  }

}
