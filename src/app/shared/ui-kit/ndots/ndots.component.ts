import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profx-ndots',
  templateUrl: './ndots.component.html',
  styleUrls: ['./ndots.component.scss']
})
export class NdotsComponent implements OnInit {
  @Input() length = 4;
  @Input() value = 4;

  dots = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.length; i++) {
      this.dots.push(i >= this.value ? 1 : 0);
    }
  }

}
