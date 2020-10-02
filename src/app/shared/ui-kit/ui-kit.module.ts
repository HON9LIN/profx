import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NdotsComponent } from './ndots/ndots.component';



@NgModule({
  declarations: [NdotsComponent],
  exports: [
    NdotsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
