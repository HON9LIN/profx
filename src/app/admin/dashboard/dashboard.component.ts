import { Component, Input, OnInit } from '@angular/core';

import { Balance } from '../../core/models/balance';

@Component({
  selector: 'profx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() balance: Balance = {
    balance: 50033,
    equity: 50025.63,
    margin: 22.18,
    freeMargin: 50003.45,
    marginLevel: 225566.24
  };

  isBuying = true;

  constructor() { }

  ngOnInit(): void {
  }

}
