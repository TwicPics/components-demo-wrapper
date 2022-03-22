import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'TwicHeader',
    templateUrl: './twic-header.component.html',
    styleUrls: ['./twic-header.component.css']
})
export class TwicHeaderComponent implements OnInit {

    @Input() tags:any[];
    @Input() redirect:string;

    urlLogoTwicPics = `https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics.svg`;
    urlLogoAngular = `https://assets.twicpics.com/demo/@twicpics-components/logos/angular.svg`;
    classLogoAngular = `angular-logo`;
    altLogoAngular = `Angular logo`;

    constructor() { }

    ngOnInit(): void {
    }

}
