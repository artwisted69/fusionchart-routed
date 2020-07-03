import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

@Component({
  selector: 'app-chart-timeline',
  templateUrl: './chart-timeline.component.html',
  styleUrls: ['./chart-timeline.component.scss'],
})
export class ChartTimelineComponent implements OnInit{
  @Input() type: any;
  @Input() chartOptions: any;
  @Output() GoBack = new EventEmitter();
  dataSource: any;
  width: string;
  height: string;
  message = '';
  constructor() {

    this.width = '100%';
    this.height = '600';
    this.dataSource = {
      chart: {
        showLegend: true,
        exportenabled: 1,
        theme: 'candy',
        loadMessage: "YOOOOOOOOOOOOOOOOOOOOOOOOO",
      },

    };

  }


  ngOnInit(): void {
   this.fetchInputData();
   this.type = this.type;
   this.dataSource.yaxis = this.chartOptions.configurations.yaxis;
   this.dataSource.caption = this.chartOptions.configurations.caption;
   this.dataSource.subcaption = this.chartOptions.configurations.subcaption;
}

  fetchInputData(): void  {
    const fusionDataStore = new FusionCharts.DataStore();
    const fusionTable = fusionDataStore.createDataTable(this.chartOptions.data, this.chartOptions.schema);
    this.dataSource.data = fusionTable;
  }
  

  goBack(): void {
    this.GoBack.emit();
  }


}
