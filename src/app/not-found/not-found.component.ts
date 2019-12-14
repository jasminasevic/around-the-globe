import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  src = 'assets/img/around-the-globe-travel.jpg';
  alt = 'Contact us';

  constructor() { }

  ngOnInit() {
  }

}
