import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faSort } from '@fortawesome/free-solid-svg-icons';
import { tradesData } from '../../../core/data/trades';

@Component({
  selector: 'profx-scanner-panel',
  templateUrl: './scanner-panel.component.html',
  styleUrls: ['./scanner-panel.component.scss']
})
export class ScannerPanelComponent implements OnInit {

  tradesData = tradesData;

  faInfoCircle = faInfoCircle;
  faSort = faSort;

  timeFrameOptions = [
    { key: '5', value: '5' },
    { key: '15', value: '15' },
    { key: '30', value: '30' },
    { key: '60', value: '60' },
    { key: '240', value: '240' },
    { key: 'D', value: 'D' },
  ];

  timeFrame = '60';

  constructor() {
  }

  ngOnInit(): void {
  }

}
