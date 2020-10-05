import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'profx-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})
export class TradingviewComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    new TradingView.widget(
      {
        width: '100%',
        height: '100%',
        symbol: 'FX_IDC:USDGBP',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '6',
        locale: 'uk',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        save_image: false,
        container_id: 'tradingview_f1799'
      }
    );
  }
}
