import { ChartTimelineComponent } from './chart-timeline/chart-timeline.component';
import { ChartComboComponent } from './chart-combo/chart-combo.component';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries'; // Import timeseries
import * as Stacked from 'fusioncharts/fusioncharts.msstackedcolumn2dsplinedy'
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Excel from 'fusioncharts/fusioncharts.excelexport';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, TimeSeries, Stacked, Charts, FusionTheme, Excel);

@NgModule({
  declarations: [
      ChartComboComponent,
      ChartTimelineComponent
  ],
  imports: [FusionChartsModule],
  exports: [
      FusionChartsModule,
      ChartComboComponent,
      ChartTimelineComponent
    ]
})
export class MyFusionChartsModule { }
