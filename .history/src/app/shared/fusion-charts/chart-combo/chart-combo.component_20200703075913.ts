import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked, AfterViewInit, DoCheck, NgZone } from '@angular/core';
import * as FusionCharts from 'fusioncharts';


@Component({
  selector: 'app-chart-combo',
  templateUrl: './chart-combo.component.html',
  styleUrls: ['./chart-combo.component.scss']
})
export class ChartComboComponent {
    dataSource: Object;
    title: string;
    chart: any;
  
    constructor(private zone: NgZone) {
      this.title = "Angular  FusionCharts Sample";
      this.dataSource = {
        "chart": {
          "caption": "Quarterly revenue",
          "subCaption": "Last year",
          "xAxisName": "Quarter (Click to drill down)",
          "yAxisName": "Revenue (In USD)",
          "numberPrefix": "$",
          "theme": "fusion"
        },
  
        "data": [{
            "label": "Q1",
            "value": "1950000",
            "link": "newchart-json-q1"
          },
          {
            "label": "Q2",
            "value": "1970000",
            "link": "newchart-json-q2"
          },
          {
            "label": "Q3",
            "value": "1910000",
            "link": "newchart-json-q3"
          },
          {
            "label": "Q4",
            "value": "2120000",
            "link": "newchart-json-q4"
          }
        ],
  
        "linkeddata": [{
            "id": "q1",
            "linkedchart": {
              "chart": {
                "caption": "Monthly Revenue",
                "subcaption": "First Quarter",
                "xAxisName": "Month",
                "yAxisName": "Revenue (In USD)",
                "numberPrefix": "$",
                "theme": "fusion"
              },
              "data": [{
                "label": "Jan",
                "value": "420000"
              }, {
                "label": "Feb",
                "value": "810000"
              }, {
                "label": "Mar",
                "value": "720000"
              }]
            }
          },
          {
            "id": "q2",
            "linkedchart": {
              "chart": {
                "caption": "Monthly Revenue",
                "subcaption": "Second Quarter",
                "xAxisName": "Month",
                "yAxisName": "Revenue (In USD)",
                "numberPrefix": "$",
                "theme": "fusion"
              },
              "data": [{
                "label": "Apr",
                "value": "550000"
              }, {
                "label": "May",
                "value": "910000"
              }, {
                "label": "Jun",
                "value": "510000"
              }]
            }
          },
          {
            "id": "q3",
            "linkedchart": {
              "chart": {
                "caption": "Monthly Revenue",
                "subcaption": "Third Quarter",
                "xAxisName": "Month",
                "yAxisName": "Revenue (In USD)",
                "numberPrefix": "$",
                "theme": "fusion"
              },
              "data": [{
                "label": "Jul",
                "value": "680000"
              }, {
                "label": "Aug",
                "value": "620000"
              }, {
                "label": "Sep",
                "value": "610000"
              }]
            }
          },
          {
            "id": "q4",
            "linkedchart": {
              "chart": {
                "caption": "Monthly Revenue",
                "subcaption": "Fourth Quarter",
                "xAxisName": "Month",
                "yAxisName": "Revenue (In USD)",
                "numberPrefix": "$",
                "theme": "fusion"
              },
              "data": [{
                "label": "Oct",
                "value": "490000"
              }, {
                "label": "Nov",
                "value": "900000"
              }, {
                "label": "Dec",
                "value": "730000"
              }]
            }
          }
        ]
      };
    }
  
    initialized($event) {
      this.chart = $event.chart; // Storing the chart instance
      console.log(this.chart)
    }
  
//   @Input() data: any;
//   @Input() schema: any;
//   @Input() config: any;
//   @Input() type: any;

//   dataSource: any;

//   width: string;
//   height: string;

//   constructor() {
//     this.width = '100%';
//     this.height = '600';
//     this.dataSource = {
//       chart: {
//         showLegend: true,
//         numberprefix: "$",
//         theme: 'fusion'
//       },

//     };
//   }

//   ngOnInit(): void {
//   //  this.fetchInputData();
//     this.type = this.type;
//     this.dataSource.yaxis = this.config.yaxis;
//     this.dataSource.chart.caption = this.config.caption;
//     this.dataSource.categories = this.config.categories;
//     this.dataSource.chart.subcaption = this.config.subcaption;
//     this.dataSource.dataset = this.data;
//     console.log(this.data)
//   }



}
