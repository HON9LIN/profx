import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {
  }

  transform(value: number, separator= ','): string {
    const formatted = this.decimalPipe.transform(value);
    return formatted.replace(',', separator);
  }

}
