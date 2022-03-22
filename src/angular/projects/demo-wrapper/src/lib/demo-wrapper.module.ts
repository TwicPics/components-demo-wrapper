import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TwicWrapperComponent } from './twic-wrapper/twic-wrapper.component';
import { TwicHeaderComponent } from './twic-header/twic-header.component';
import { TwicAbstractComponent } from './twic-abstract/twic-abstract.component';



@NgModule({
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
})
export class DemoWrapperModule { }
