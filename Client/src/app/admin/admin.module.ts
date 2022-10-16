import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerComponent } from './seller/seller.component';
import { KmcommonModule } from '../kmcommon/kmcommon.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SellerComponent
  ],
  imports: [
    CommonModule,
    KmcommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
