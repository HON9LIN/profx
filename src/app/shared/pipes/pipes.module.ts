import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { FormatNumberPipe } from './format-number.pipe';



@NgModule({
  declarations: [FormatNumberPipe],
  exports: [
    FormatNumberPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [DecimalPipe]
})
export class PipesModule { }
