import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-twic-style-driven',
    templateUrl: './twic-style-driven.component.html',
    styleUrls: ['./twic-style-driven.component.scss'],
})
export class TwicStyleDrivenComponent implements OnInit {

    imgUrl = `components/horse.jpg`;

    constructor() { }

    ngOnInit(): void {
    }

}
