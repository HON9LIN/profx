import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiSwitchModule.forRoot({
      size: 'large',
      color: 'rgb(0, 189, 99)',
      switchColor: '#0f9d58',
      defaultBgColor: '#1f2021',
      defaultBoColor : '#476EFF',
      checkedLabel: '',
      uncheckedLabel: ''
    }),
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
