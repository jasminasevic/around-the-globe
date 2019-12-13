import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, query, stagger, animate, style } from '@angular/animations';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    trigger('textAnimation', [
      transition('* => *', [
        query('h1, small', style({ transform: 'translateX(+500%)' })),
        query('h1, small',
          stagger('600ms', [
            animate('1800ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ]),
    trigger('photosAnimation', [
      transition('* => *', [
        query('img, h4, p', style({ transform: 'translateY(+500%)' })),
        query('img, h4, p',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  gallery;
  constructor(private service: GalleryService) {

  }
  ngOnInit() {
    this.service.dohvatiGallery().subscribe(
      response => {
        console.log(response);
        this.gallery = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}