import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { OverviewContainerComponent } from './components/overview-container/overview-container.component';
import { ReportsComponent } from './components/reports/reports.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [OverviewContainerComponent, ReportsComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    
    FuseSharedModule,
    MatTabsModule
  ]
})
export class OverviewModule { }
