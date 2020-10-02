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

  constructor() {
  }

  ngOnInit(): void {
  }

}
