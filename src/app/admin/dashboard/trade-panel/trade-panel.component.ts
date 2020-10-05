import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'profx-trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.scss']
})
export class TradePanelComponent implements OnInit {

  @Output() tradeClick = new EventEmitter();
  @Output() tradeClose = new EventEmitter();

  ordered = false;

  constructor() { }

  ngOnInit(): void {
  }

}
