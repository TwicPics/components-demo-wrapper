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
import { TwicLifeCycleComponent } from "./twic-life-cycle/twic-life-cycle.component";
import { TwicModeComponent } from "./twic-mode/twic-mode.component";
import { TwicPlaceholderComponent } from "./twic-placeholder/twic-placeholder.component";
import { TwicPositionComponent } from "./twic-position/twic-position.component";
import { TwicRatioComponent } from "./twic-ratio/twic-ratio.component";
import { TwicSliderComponent } from "./twic-slider/twic-slider.component";
import { TwicSlideshowComponent } from "./twic-slideshow/twic-slideshow.component";
import { TwicTransitionComponent } from "./twic-transition/twic-transition.component";
import { SlideshowComponent } from './twic-slideshow/slideshow/slideshow.component';
import { TwicModalComponent } from './twic-modal/twic-modal.component';
import { ModalComponent } from './twic-modal/modal/modal.component';

const appRoutes: Routes = [
  { path: "menu", component: MenuComponent },
  { path: "twicArtDirection", component: TwicArtDirectionComponent },
  { path: "twicBasicGrid", component: TwicBasicGridComponent },
  { path: "twicFlipCard", component: TwicFlipCardComponent },
  { path: "twicFocus", component: TwicFocusComponent },
  { path: "twicLifeCycle", component: TwicLifeCycleComponent },
  { path: "twicMode", component: TwicModeComponent },
  { path: "twicModal", component: TwicModalComponent },
  { path: "twicPlaceholder", component: TwicPlaceholderComponent },
  { path: "twicPosition", component: TwicPositionComponent },
  { path: "twicRatio", component: TwicRatioComponent },
  { path: "twicSlider", component: TwicSliderComponent },
  { path: "twicSlideshow", component: TwicSlideshowComponent },
  { path: "twicStyleDriven", component: TwicStyleDrivenComponent },
  { path: "twicTransition", component: TwicTransitionComponent },
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
    TwicLifeCycleComponent,
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
