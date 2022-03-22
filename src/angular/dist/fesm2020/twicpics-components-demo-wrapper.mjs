import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class TwicHeaderComponent {
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

class TwicWrapperComponent {
    constructor() {
        this.tags = [`@twicpics-components`];
        this.redirect = `https://github.com/TwicPics/components/tree/main/documentation#twicpics-components`;
    }
    ngOnInit() { }
}
TwicWrapperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TwicWrapperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: TwicWrapperComponent, selector: "TwicWrapper", inputs: { tags: "tags", redirect: "redirect" }, ngImport: i0, template: "<div id=\"twic-demo-wrapper\" class=\"todo\">\n    <TwicHeader [tags]=\"tags\" [redirect]=\"redirect\"></TwicHeader>\n    <main id=\"twic-demo-container\">\n        <ng-content></ng-content>\n    </main>\n</div>", styles: [""], components: [{ type: TwicHeaderComponent, selector: "TwicHeader", inputs: ["tags", "redirect"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: "TwicWrapper", template: "<div id=\"twic-demo-wrapper\" class=\"todo\">\n    <TwicHeader [tags]=\"tags\" [redirect]=\"redirect\"></TwicHeader>\n    <main id=\"twic-demo-container\">\n        <ng-content></ng-content>\n    </main>\n</div>", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { tags: [{
                type: Input
            }], redirect: [{
                type: Input
            }] } });

class TwicAbstractComponent {
    constructor() {
        this.title = ``;
    }
    ngOnInit() {
    }
}
TwicAbstractComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicAbstractComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TwicAbstractComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: TwicAbstractComponent, selector: "TwicAbstract", inputs: { title: "title", codeSandBoxName: "codeSandBoxName", codeSandBoxUrl: "codeSandBoxUrl" }, ngImport: i0, template: "<div class=\"twic-abstract\">\n    <h1>\n        {{ title }}\n    </h1>\n    <div>\n        <div>\n            <ng-content></ng-content>\n        </div>\n        <ng-template [ngIf]=\"codeSandBoxUrl\">\n            <div class=\"codesandbox-container\">\n                <a\n                    href=\"{{ codeSandBoxUrl }}?fontsize=14&hidenavigation=1&theme=dark\">\n                    <img src=\"https://codesandbox.io/static/img/play-codesandbox.svg\"/>\n                </a>\n            </div>\n        </ng-template>\n    </div>\n</div>\n", styles: [""], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TwicAbstractComponent, decorators: [{
            type: Component,
            args: [{ selector: 'TwicAbstract', template: "<div class=\"twic-abstract\">\n    <h1>\n        {{ title }}\n    </h1>\n    <div>\n        <div>\n            <ng-content></ng-content>\n        </div>\n        <ng-template [ngIf]=\"codeSandBoxUrl\">\n            <div class=\"codesandbox-container\">\n                <a\n                    href=\"{{ codeSandBoxUrl }}?fontsize=14&hidenavigation=1&theme=dark\">\n                    <img src=\"https://codesandbox.io/static/img/play-codesandbox.svg\"/>\n                </a>\n            </div>\n        </ng-template>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], codeSandBoxName: [{
                type: Input
            }], codeSandBoxUrl: [{
                type: Input
            }] } });

class DemoWrapperModule {
}
DemoWrapperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DemoWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DemoWrapperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DemoWrapperModule, declarations: [TwicWrapperComponent,
        TwicHeaderComponent,
        TwicAbstractComponent], imports: [CommonModule], exports: [TwicWrapperComponent,
        TwicAbstractComponent] });
DemoWrapperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DemoWrapperModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DemoWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TwicWrapperComponent,
                        TwicHeaderComponent,
                        TwicAbstractComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TwicWrapperComponent,
                        TwicAbstractComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of demo-wrapper
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DemoWrapperModule, TwicAbstractComponent, TwicWrapperComponent };
//# sourceMappingURL=twicpics-components-demo-wrapper.mjs.map
