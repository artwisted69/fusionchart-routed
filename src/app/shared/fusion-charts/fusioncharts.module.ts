import { ChartTimelineComponent } from './chart-timeline/chart-timeline.component';
import { ChartComboComponent } from './chart-combo/chart-combo.component';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries'; // Import timeseries
//import * as Stacked from 'fusioncharts/fusioncharts.msstackedcolumn2dsplinedy'//
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import * as Excel from 'fusioncharts/fusioncharts.excelexport';
import { MatButtonModule } from '@angular/material/button';
import { ChartUniversalComponent } from './chart-universal/chart-universal.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, Excel);

@NgModule({
  declarations: [
      ChartComboComponent,
      ChartTimelineComponent,
      ChartUniversalComponent
  ],
  imports: [
      FusionChartsModule,
      MatButtonModule
    ],
  exports: [
      FusionChartsModule,
      ChartComboComponent,
      ChartTimelineComponent,
      ChartUniversalComponent
    ]
})
export class MyFusionChartsModule { }
