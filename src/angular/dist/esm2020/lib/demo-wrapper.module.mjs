import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TwicWrapperComponent } from './twic-wrapper/twic-wrapper.component';
import { TwicHeaderComponent } from './twic-header/twic-header.component';
import { TwicAbstractComponent } from './twic-abstract/twic-abstract.component';
import * as i0 from "@angular/core";
export class DemoWrapperModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby13cmFwcGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2RlbW8td3JhcHBlci9zcmMvbGliL2RlbW8td3JhcHBlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBa0JoRixNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBWjFCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIscUJBQXFCLGFBR3JCLFlBQVksYUFHWixvQkFBb0I7UUFDcEIscUJBQXFCOytHQUdaLGlCQUFpQixZQVJuQjtZQUNQLFlBQVk7U0FDYjsyRkFNVSxpQkFBaUI7a0JBZDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLHFCQUFxQjtxQkFDdEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgVHdpY1dyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3R3aWMtd3JhcHBlci90d2ljLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFR3aWNIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3R3aWMtaGVhZGVyL3R3aWMtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUd2ljQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuL3R3aWMtYWJzdHJhY3QvdHdpYy1hYnN0cmFjdC5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHdpY1dyYXBwZXJDb21wb25lbnQsXG4gICAgVHdpY0hlYWRlckNvbXBvbmVudCxcbiAgICBUd2ljQWJzdHJhY3RDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHdpY1dyYXBwZXJDb21wb25lbnQsXG4gICAgVHdpY0Fic3RyYWN0Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVtb1dyYXBwZXJNb2R1bGUgeyB9XG4iXX0=