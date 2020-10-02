import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'profx-scanner-panel',
  templateUrl: './scanner-panel.component.html',
  styleUrls: ['./scanner-panel.component.scss']
})
export class ScannerPanelComponent implements OnInit {

  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
