import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twic-flip-card',
  templateUrl: './twic-flip-card.component.html',
  styleUrls: ['./twic-flip-card.component.scss']
})
export class TwicFlipCardComponent implements OnInit {

  cards = [
    {
      "front": {
          "url": `components/flip/orange-1.jpg`,
      },
      "back": {
          "url": `components/flip/orange-2.jpg`,
      },
  },
  {
      "front": {
          "url": `components/flip/fig-1.jpg`,
      },
      "back": {
          "url": `components/flip/fig-2.jpg`,
      },
  },
  {
      "front": {
          "url": `components/flip/cherry-3.jpg`,
      },
      "back": {
          "url": `components/flip/cherry-2.jpg`,
      },
  },
  {
      "front": {
          "url": `components/flip/melon-1.jpg`,
      },
      "back": {
          "url": `components/flip/melon-2.jpg`,
      },
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
