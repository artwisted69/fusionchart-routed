import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-universal',
  templateUrl: './chart-universal.component.html',
  styleUrls: ['./chart-universal.component.scss']
})
export class ChartUniversalComponent {
@Input() chartOptions;

    dataSource: Object;
    constructor() {
      //STEP 2 - Chart Data
      const chartData = [
        {
          label: "Venezuela",
          value: "290"
        },
        {
          label: "Saudi",
          value: "260"
        },
        {
          label: "Canada",
          value: "180"
        },
        {
          label: "Iran",
          value: "140"
        },
        {
          label: "Russia",
          value: "115"
        },
        {
          label: "UAE",
          value: "100"
        },
        {
          label: "US",
          value: "30"
        },
        {
          label: "China",
          value: "30"
        }
      ];
      // STEP 3 - Chart Configuration
      const dataSource = {
        chart: {
          //Set the chart caption
          caption: "Countries With Most Oil Reserves [2017-18]",
          //Set the chart subcaption
          subCaption: "In MMbbl = One Million barrels",
          //Set the x-axis name
          xAxisName: "Country",
          //Set the y-axis name
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "K",
          //Set the theme for your chart
          theme: "fusion"
        },
        // Chart Data - from step 2
        data: chartData
      };
      this.dataSource = dataSource;
    }
}
