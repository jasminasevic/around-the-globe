import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [

    trigger('textAnimation', [
      transition('* => *', [
        query('ul, li, h4, h5, p', style({ transform: 'translateY(+500%)' })),
        query('ul, li, h4, h5, p',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' }))
          ]))
      ])
    ])

  ]
})
export class AboutComponent implements OnInit {

  src = 'assets/img/featured.jpg';
  alt = 'Author';

  constructor() { }

  ngOnInit() {
  }

}