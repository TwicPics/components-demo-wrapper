import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-twic-art-direction',
    templateUrl: './twic-art-direction.component.html',
    styleUrls: ['./twic-art-direction.component.scss']
})
export class TwicArtDirectionComponent implements OnInit {

    imgUrl = `components/greece.jpg`;

    constructor() { }

    ngOnInit(): void {
    }

}
