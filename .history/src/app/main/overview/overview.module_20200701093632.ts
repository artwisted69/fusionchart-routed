import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseWidgetModule } from './../../../@fuse/components/widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { OverviewContainerComponent } from './components/overview-container/overview-container.component';
import { ReportsComponent } from './components/reports/reports.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ReportsDashboardComponent } from './components/reports-dashboard/reports-dashboard.component';
import { ReportsMarketingTrendsComponent } from './components/reports-marketing-trends/reports-marketing-trends.component';
import { ReportsReportsComponent } from './components/reports-reports/reports-reports.component';




@NgModule({
  declarations: [OverviewContainerComponent, ReportsComponent, ReportsDashboardComponent, ReportsMarketingTrendsComponent, ReportsReportsComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    BrowserAnimationsModule,
    FuseSharedModule,
    FuseWidgetModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule
  ]
})
export class OverviewModule { }
