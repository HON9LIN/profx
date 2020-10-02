import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profx-risk-panel',
  templateUrl: './risk-panel.component.html',
  styleUrls: ['./risk-panel.component.scss']
})
export class RiskPanelComponent implements OnInit {
  @Input() balance = 1394;
  @Input() equity = 1394;
  @Input() freeMargin = 0;
  @Input() margin = 0;
  @Input() risk = '1:3';
  @Input() riskUsd = 150;
  @Input() profit = 450;


  constructor() {
  }

  ngOnInit(): void {
  }

}
