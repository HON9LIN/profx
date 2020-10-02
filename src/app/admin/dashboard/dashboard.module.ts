import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { ScannerPanelComponent } from './scanner-panel/scanner-panel.component';
import { RiskPanelComponent } from './risk-panel/risk-panel.component';
import { TradePanelComponent } from './trade-panel/trade-panel.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScannerItemComponent } from './scanner-item/scanner-item.component';
import { UiKitModule } from '../../shared/ui-kit/ui-kit.module';



@NgModule({
  declarations: [DashboardComponent, ScannerPanelComponent, RiskPanelComponent, TradePanelComponent, ScannerItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PipesModule,
    UiSwitchModule,
    FontAwesomeModule,
    UiKitModule,
  ]
})
export class DashboardModule { }
