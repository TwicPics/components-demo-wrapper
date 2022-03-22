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
                    "route": `/twicBasicGrid`,
                    "imgSrc": `https://assets.twicpics.com/examples/football.jpg`,
                    "title": `Basic example`,
                },
                {
                    "route": `/twicArtDirection`,
                    "imgSrc": `components/greece.jpg`,
                    "title": `Art direction`,
                },
                {
                    "route": `/twicFlipCard`,
                    "imgSrc": `components/flip/orange-1.jpg`,
                    "title": `Flip cards`,
                },
                {
                    "route": `/twicLifeCycle`,
                    "imgSrc": `components/portraits/woman-1.jpg`,
                    "title": `Life cycle`,
                },
                {
                    "route": `/twicModal`,
                    "imgSrc": `components/modal/seagull.jpg`,
                    "title": `Modal`,
                },
                {
                    "route": `/twicSlider`,
                    "imgSrc": `components/slider/pantone.jpg`,
                    "title": `Slider`,
                },
                {
                    "route": `/twicSlideshow`,
                    "imgSrc": `components/slideshow/space-1.jpg`,
                    "title": `Slideshow`,
                },
                {
                    "route": `/twicStyleDriven`,
                    "imgSrc": `components/horse.jpg`,
                    "title": `Style driven`,
                },
            ],
        },
        {
            "title": `<TwicImg> properties`,
            "items": [
                {
                    "route": `/twicFocus`,
                    "imgSrc": `components/puppy.jpg`,
                    "title": `focus`,
                },
                {
                    "route": `/twicMode`,
                    "imgSrc": `components/fox.jpg`,
                    "title": `mode`,
                },
                {
                    "route": `/twicPlaceholder`,
                    "imgSrc": `components/cat.jpg`,
                    "title": `placeholder`,
                },
                {
                    "route": `/twicPosition`,
                    "imgSrc": `components/position/horse.jpg`,
                    "title": `position`,
                },
                {
                    "route": `/twicRatio`,
                    "imgSrc": `components/woman-and-winter.jpg`,
                    "title": `ratio`,
                },
                {
                    "route": `/twicTransition`,
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
