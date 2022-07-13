import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    categories = [
        {
            "title": `<TwicImg> use cases`,
            "items": [
                {
                    "route": `/art-directions`,
                    "imgSrc": `components/greece.jpg`,
                    "title": `Art directions`,
                },
                {
                    "route": `/basic-grid`,
                    "imgSrc": `https://assets.twicpics.com/examples/football.jpg`,
                    "title": `Basic example`,
                },
                {
                    "route": `/flip-cards`,
                    "imgSrc": `components/flip/orange-1.jpg`,
                    "title": `Flip cards`,
                },
                {
                    "route": `/grid-and-zoom`,
                    "imgSrc": `components/portraits/woman-1.jpg`,
                    "title": `Grid & zoom`,
                },
                {
                    "route": `/modal`,
                    "imgSrc": `components/modal/seagull.jpg`,
                    "title": `Modal`,
                },
                {
                    "route": `/slider`,
                    "imgSrc": `components/slider/pantone.jpg`,
                    "title": `Slider`,
                },
                {
                    "route": `/slideshow`,
                    "imgSrc": `components/slideshow/space-1.jpg`,
                    "title": `Slideshow`,
                },
                {
                    "route": `/style-driven`,
                    "imgSrc": `components/horse.jpg`,
                    "title": `Style driven`,
                },
            ],
        },
        {
            "title": `<TwicImg> properties`,
            "items": [
                {
                    "route": `/focus`,
                    "imgSrc": `components/puppy.jpg`,
                    "title": `focus`,
                },
                {
                    "route": `/mode`,
                    "imgSrc": `components/fox.jpg`,
                    "title": `mode`,
                },
                {
                    "route": `/placeholder`,
                    "imgSrc": `components/cat.jpg`,
                    "title": `placeholder`,
                },
                {
                    "route": `/position`,
                    "imgSrc": `components/position/horse.jpg`,
                    "title": `position`,
                },
                {
                    "route": `/ratio`,
                    "imgSrc": `components/woman-and-winter.jpg`,
                    "title": `ratio`,
                },
                {
                    "route": `/transition`,
                    "imgSrc": `components/peacock.jpg`,
                    "title": `transition`,
                },
            ],
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
