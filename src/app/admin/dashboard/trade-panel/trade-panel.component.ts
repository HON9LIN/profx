import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profx-trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.scss']
})
export class TradePanelComponent implements OnInit {

  ordered = false;

  constructor() { }

  ngOnInit(): void {
  }

}
