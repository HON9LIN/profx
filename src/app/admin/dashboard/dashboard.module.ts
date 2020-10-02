import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { ScannerPanelComponent } from './scanner-panel/scanner-panel.component';
import { RiskPanelComponent } from './risk-panel/risk-panel.component';
import { TradePanelComponent } from './trade-panel/trade-panel.component';



@NgModule({
  declarations: [DashboardComponent, ScannerPanelComponent, RiskPanelComponent, TradePanelComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PipesModule,
  ]
})
export class DashboardModule { }
