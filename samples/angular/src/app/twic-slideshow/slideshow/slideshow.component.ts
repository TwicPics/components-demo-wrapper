import { Component, Input, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: "app-slideshow",
    templateUrl: "./slideshow.component.html",
    styleUrls: ["./slideshow.component.scss"],
})
export class SlideshowComponent implements OnInit, OnDestroy {
    @Input() images!: { url: string, focus: string }[];

    activeIndex = 0;
    isPaused = false;
    timerDuration = 3000;

    interval: any;

    constructor() { }

    ngOnInit(): void {
        this.interval = setInterval(() => {
            if (!this.isPaused) {
                this.updateIndex(this.activeIndex + 1);
            }
        }, this.timerDuration);
    }

    ngOnDestroy(): void {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }



    updateIndex(newIndex: number) {
        const nbElement = this.images.length - 1;
        let _newIndex = newIndex;
        if (newIndex < 0) {
            _newIndex = nbElement;
        } else if (newIndex > nbElement) {
            _newIndex = 0;
        }
        this.activeIndex = _newIndex;
    }

    setIsPaused(): void {
        this.isPaused = !this.isPaused;
    }
}
