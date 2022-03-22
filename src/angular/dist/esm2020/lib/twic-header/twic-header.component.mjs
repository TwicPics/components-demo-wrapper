import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TwicHeaderComponent {
    constructor() {
        this.urlLogoTwicPics = `https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics.svg`;
        this.urlLogoAngular = `https://assets.twicpics.com/demo/@twicpics-components/logos/angular.svg`;
        this.classLogoAngular = `angular-logo`;
        this.altLogoAngular = `Angular logo`;
    }
    ngOnInit() {
    }
}
TwicHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TwicHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: TwicHeaderComponent, selector: "TwicHeader", inputs: { tags: "tags", redirect: "redirect" }, ngImport: i0, template: "<header id=\"twic-header\">\n    <a href=\"/\" title=\"Home\">\n        <h1 class=\"heading-primary\">\n            <img [src]=\"urlLogoTwicPics\" class=\"twicpics-logo\" alt=\"TwicPics logo\" />\n            <span>x</span>\n            <img [src]=\"urlLogoAngular\" [ngClass]=\"classLogoAngular\" [alt]=\"altLogoAngular\" />\n        </h1>\n    </a>\n    <div class=\"tags-container\">\n        <ng-container *ngFor=\"let tag of tags\">\n            <div class=\"tag\">\n                {{ tag }}\n            </div>\n        </ng-container>\n        <a [href]=\"redirect\" target=\"_blank\" class=\"documentation-link tag tag--bg-purple-rain\" rel=\"noreferrer\">\n            Documentation\n        </a>\n    </div>\n</header>", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'TwicHeader', template: "<header id=\"twic-header\">\n    <a href=\"/\" title=\"Home\">\n        <h1 class=\"heading-primary\">\n            <img [src]=\"urlLogoTwicPics\" class=\"twicpics-logo\" alt=\"TwicPics logo\" />\n            <span>x</span>\n            <img [src]=\"urlLogoAngular\" [ngClass]=\"classLogoAngular\" [alt]=\"altLogoAngular\" />\n        </h1>\n    </a>\n    <div class=\"tags-container\">\n        <ng-container *ngFor=\"let tag of tags\">\n            <div class=\"tag\">\n                {{ tag }}\n            </div>\n        </ng-container>\n        <a [href]=\"redirect\" target=\"_blank\" class=\"documentation-link tag tag--bg-purple-rain\" rel=\"noreferrer\">\n            Documentation\n        </a>\n    </div>\n</header>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { tags: [{
                type: Input
            }], redirect: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpYy1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVtby13cmFwcGVyL3NyYy9saWIvdHdpYy1oZWFkZXIvdHdpYy1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVtby13cmFwcGVyL3NyYy9saWIvdHdpYy1oZWFkZXIvdHdpYy1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sbUJBQW1CO0lBVTVCO1FBTEEsb0JBQWUsR0FBRywwRUFBMEUsQ0FBQztRQUM3RixtQkFBYyxHQUFHLHlFQUF5RSxDQUFDO1FBQzNGLHFCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLGNBQWMsQ0FBQztJQUVoQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztnSEFiUSxtQkFBbUI7b0dBQW5CLG1CQUFtQixrR0NQaEMsMnRCQWtCUzsyRkRYSSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0ksWUFBWTswRUFNYixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1R3aWNIZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90d2ljLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdHdpYy1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFR3aWNIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdGFnczphbnlbXTtcbiAgICBASW5wdXQoKSByZWRpcmVjdDpzdHJpbmc7XG5cbiAgICB1cmxMb2dvVHdpY1BpY3MgPSBgaHR0cHM6Ly9hc3NldHMudHdpY3BpY3MuY29tL2RlbW8vQHR3aWNwaWNzLWNvbXBvbmVudHMvbG9nb3MvdHdpY3BpY3Muc3ZnYDtcbiAgICB1cmxMb2dvQW5ndWxhciA9IGBodHRwczovL2Fzc2V0cy50d2ljcGljcy5jb20vZGVtby9AdHdpY3BpY3MtY29tcG9uZW50cy9sb2dvcy9hbmd1bGFyLnN2Z2A7XG4gICAgY2xhc3NMb2dvQW5ndWxhciA9IGBhbmd1bGFyLWxvZ29gO1xuICAgIGFsdExvZ29Bbmd1bGFyID0gYEFuZ3VsYXIgbG9nb2A7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG59XG4iLCI8aGVhZGVyIGlkPVwidHdpYy1oZWFkZXJcIj5cbiAgICA8YSBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxpbWcgW3NyY109XCJ1cmxMb2dvVHdpY1BpY3NcIiBjbGFzcz1cInR3aWNwaWNzLWxvZ29cIiBhbHQ9XCJUd2ljUGljcyBsb2dvXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICAgICAgICA8aW1nIFtzcmNdPVwidXJsTG9nb0FuZ3VsYXJcIiBbbmdDbGFzc109XCJjbGFzc0xvZ29Bbmd1bGFyXCIgW2FsdF09XCJhbHRMb2dvQW5ndWxhclwiIC8+XG4gICAgICAgIDwvaDE+XG4gICAgPC9hPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWdzLWNvbnRhaW5lclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ1wiPlxuICAgICAgICAgICAgICAgIHt7IHRhZyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8YSBbaHJlZl09XCJyZWRpcmVjdFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZG9jdW1lbnRhdGlvbi1saW5rIHRhZyB0YWctLWJnLXB1cnBsZS1yYWluXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG48L2hlYWRlcj4iXX0=