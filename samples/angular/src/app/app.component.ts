import { Component } from "@angular/core";
import { installTwicPics } from "@twicpics/components/angular13";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular';
}

// TwicPics Components configuration (see Setup Options)
installTwicPics( {
    "domain": `https://demo.twic.pics`,
    "anticipation": 0.5,
    "step": 100,
} );
