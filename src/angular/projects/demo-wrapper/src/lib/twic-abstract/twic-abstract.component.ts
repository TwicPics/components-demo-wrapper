import { Component,Input, OnInit } from '@angular/core';

@Component({
    selector: 'TwicAbstract',
    templateUrl: './twic-abstract.component.html',
    styleUrls: ['./twic-abstract.component.css']
})
export class TwicAbstractComponent implements OnInit {

    @Input() title=``;
    @Input() codeSandBoxName?:string;
    @Input() codeSandBoxUrl?:string;

    constructor() { }

    ngOnInit(): void {
    }

}
