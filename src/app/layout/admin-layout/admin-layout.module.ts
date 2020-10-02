import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutComponent } from './admin-layout.component';
import { LayoutKitModule } from '../layout-kit/layout-kit.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    LayoutKitModule,
    RouterModule,
  ]
})
export class AdminLayoutModule { }
