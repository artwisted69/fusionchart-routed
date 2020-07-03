import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked, AfterViewInit, DoCheck } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

@Component({
  selector: 'app-chart-timeline',
  templateUrl: './chart-timeline.component.html',
  styleUrls: ['./chart-timeline.component.scss'],
})
export class ChartTimelineComponent implements OnInit{
  @Input() data: any;
  @Input() schema: any;
  @Input() config: any;
  @Input() type: any;

  dataSource: any;

  width: string;
  height: string;

  constructor() {

    this.width = '100%';
    this.height = '600';
    this.dataSource = {
      chart: {
        showLegend: true,
      //  exportenabled: true
      },

    };

  }


  ngOnInit() {
   this.fetchInputData();
   this.type = this.type;
   this.dataSource.yaxis = this.config.yaxis;
   this.dataSource.caption = this.config.caption;
   this.dataSource.subcaption = this.config.subcaption;
}



  fetchData() {
    var jsonify = res => res.json();

    console.log(jsonify);
    var dataFetch = fetch(
      "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/stacked-colum-chart-with-time-axis-data.json"
    ).then(jsonify);
    var schemaFetch = fetch(
      "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/stacked-colum-chart-with-time-axis-schema.json"
    ).then(jsonify);

    Promise.all([dataFetch, schemaFetch]).then(res => {
      const [data, schema] = res;
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // Afet that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      this.dataSource.data = fusionTable;
    });
  }

  fetchInputData() {
  //  console.log(this.data)
    const fusionDataStore = new FusionCharts.DataStore();
    // After that we are creating a DataTable by passing our data and schema as arguments
    const fusionTable = fusionDataStore.createDataTable(this.data, this.schema);

    // Afet that we simply mutated our timeseries datasource by attaching the above
    // DataTable into its data property.

    this.dataSource.data = fusionTable;

  }


}
