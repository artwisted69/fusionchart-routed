import { FuseWidgetModule } from './../../../@fuse/components/widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { OverviewContainerComponent } from './components/overview-container/overview-container.component';
import { ReportsComponent } from './components/reports/reports.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [OverviewContainerComponent, ReportsComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    
    FuseSharedModule,
    FuseWidgetModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class OverviewModule { }
