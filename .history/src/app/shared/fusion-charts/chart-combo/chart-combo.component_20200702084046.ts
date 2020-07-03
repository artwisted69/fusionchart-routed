import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked, AfterViewInit, DoCheck } from '@angular/core';
import * as FusionCharts from 'fusioncharts';


@Component({
  selector: 'app-chart-combo',
  templateUrl: './chart-combo.component.html',
  styleUrls: ['./chart-combo.component.scss']
})
export class ChartComboComponent implements OnInit {
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
        numberprefix: "$",
        theme: 'fusion'
      },

    };
  }

  ngOnInit(): void {
  //  this.fetchInputData();
    this.type = this.type;
    this.dataSource.yaxis = this.config.yaxis;
    this.dataSource.chart.caption = this.config.caption;
    this.dataSource.categories = this.config.categories;
    this.dataSource.chart.subcaption = this.config.subcaption;
    this.dataSource.dataset = this.data;
    console.log(this.data)
  }



}
