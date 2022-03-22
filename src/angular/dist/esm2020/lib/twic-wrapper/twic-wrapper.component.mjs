import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../twic-header/twic-header.component";
export class TwicWrapperComponent {
    constructor() {
        this.tags = [`@twicpics-components`];
        this.redirect = `https://github.com/TwicPics/components/tree/main/documentation#twicpics-components`;
    }
    ngOnInit() { }
}
TwicWrapperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TwicWrapperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: TwicWrapperComponent, selector: "TwicWrapper", inputs: { tags: "tags", redirect: "redirect" }, ngImport: i0, template: "<div id=\"twic-demo-wrapper\" class=\"todo\">\n    <TwicHeader [tags]=\"tags\" [redirect]=\"redirect\"></TwicHeader>\n    <main id=\"twic-demo-container\">\n        <ng-content></ng-content>\n    </main>\n</div>", styles: [""], components: [{ type: i1.TwicHeaderComponent, selector: "TwicHeader", inputs: ["tags", "redirect"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: "TwicWrapper", template: "<div id=\"twic-demo-wrapper\" class=\"todo\">\n    <TwicHeader [tags]=\"tags\" [redirect]=\"redirect\"></TwicHeader>\n    <main id=\"twic-demo-container\">\n        <ng-content></ng-content>\n    </main>\n</div>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { tags: [{
                type: Input
            }], redirect: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpYy13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2RlbW8td3JhcHBlci9zcmMvbGliL3R3aWMtd3JhcHBlci90d2ljLXdyYXBwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvZGVtby13cmFwcGVyL3NyYy9saWIvdHdpYy13cmFwcGVyL3R3aWMtd3JhcHBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxvQkFBb0I7SUFLL0I7UUFKUyxTQUFJLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXpDLGFBQVEsR0FBRyxvRkFBb0YsQ0FBQztJQUVqRixDQUFDO0lBRWhCLFFBQVEsS0FBVSxDQUFDOztpSEFQUixvQkFBb0I7cUdBQXBCLG9CQUFvQixtR0NQakMscU5BS007MkZERU8sb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLGFBQWE7MEVBS2QsSUFBSTtzQkFBWixLQUFLO2dCQUVOLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJUd2ljV3JhcHBlclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3R3aWMtd3JhcHBlci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdHdpYy13cmFwcGVyLmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFR3aWNXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGFncyA9IFtgQHR3aWNwaWNzLWNvbXBvbmVudHNgXTtcbiAgQElucHV0KClcbiAgcmVkaXJlY3QgPSBgaHR0cHM6Ly9naXRodWIuY29tL1R3aWNQaWNzL2NvbXBvbmVudHMvdHJlZS9tYWluL2RvY3VtZW50YXRpb24jdHdpY3BpY3MtY29tcG9uZW50c2A7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiIsIjxkaXYgaWQ9XCJ0d2ljLWRlbW8td3JhcHBlclwiIGNsYXNzPVwidG9kb1wiPlxuICAgIDxUd2ljSGVhZGVyIFt0YWdzXT1cInRhZ3NcIiBbcmVkaXJlY3RdPVwicmVkaXJlY3RcIj48L1R3aWNIZWFkZXI+XG4gICAgPG1haW4gaWQ9XCJ0d2ljLWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L21haW4+XG48L2Rpdj4iXX0=