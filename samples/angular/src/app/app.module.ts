import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TwicPicsComponentsModule } from "@twicpics/components/angular13";

import { DemoWrapperModule } from "@twicpics/components-demo-wrapper/angular/dist";

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { TwicArtDirectionComponent } from "./twic-art-direction/twic-art-direction.component";
import { TwicBasicGridComponent } from "./twic-basic-grid/twic-basic-grid.component";
import { TwicFlipCardComponent } from "./twic-flip-card/twic-flip-card.component";
import { TwicStyleDrivenComponent } from "./twic-style-driven/twic-style-driven.component";
import { TwicFocusComponent } from "./twic-focus/twic-focus.component";
import { TwicGridAndZoomComponent } from './twic-grid-and-zoom/twic-grid-and-zoom.component';
import { TwicModalComponent } from "./twic-modal/twic-modal.component";
import { TwicModeComponent } from "./twic-mode/twic-mode.component";
import { TwicPlaceholderComponent } from "./twic-placeholder/twic-placeholder.component";
import { TwicPositionComponent } from "./twic-position/twic-position.component";
import { TwicRatioComponent } from "./twic-ratio/twic-ratio.component";
import { TwicSliderComponent } from "./twic-slider/twic-slider.component";
import { TwicSlideshowComponent } from "./twic-slideshow/twic-slideshow.component";
import { TwicTransitionComponent } from "./twic-transition/twic-transition.component";
import { ModalComponent } from "./twic-modal/modal/modal.component";
import { SlideshowComponent } from "./twic-slideshow/slideshow/slideshow.component";

const appRoutes: Routes = [
  { path: "menu", component: MenuComponent },
  { path: "art-directions", component: TwicArtDirectionComponent },
  { path: "basic-grid", component: TwicBasicGridComponent },
  { path: "flip-cards", component: TwicFlipCardComponent },
  { path: "focus", component: TwicFocusComponent },
  { path: "grid-and-zoom", component: TwicGridAndZoomComponent },
  { path: "mode", component: TwicModeComponent },
  { path: "modal", component: TwicModalComponent },
  { path: "placeholder", component: TwicPlaceholderComponent },
  { path: "position", component: TwicPositionComponent },
  { path: "ratio", component: TwicRatioComponent },
  { path: "slider", component: TwicSliderComponent },
  { path: "slideshow", component: TwicSlideshowComponent },
  { path: "style-driven", component: TwicStyleDrivenComponent },
  { path: "transition", component: TwicTransitionComponent },
  {
    path: "",
    redirectTo: "menu",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TwicArtDirectionComponent,
    TwicBasicGridComponent,
    TwicFlipCardComponent,
    TwicFocusComponent,
    TwicGridAndZoomComponent,
    TwicStyleDrivenComponent,
    TwicModeComponent,
    TwicPlaceholderComponent,
    TwicPositionComponent,
    TwicRatioComponent,
    TwicTransitionComponent,
    TwicSliderComponent,
    TwicSlideshowComponent,
    SlideshowComponent,
    TwicModalComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TwicPicsComponentsModule,
    DemoWrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
