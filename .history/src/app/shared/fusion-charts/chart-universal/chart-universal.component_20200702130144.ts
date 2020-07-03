import { Component, OnInit, Input, Output, EventEmitter,  NgZone } from '@angular/core';

@Component({
  selector: 'app-chart-universal',
  templateUrl: './chart-universal.component.html',
  styleUrls: ['./chart-universal.component.scss'],
})
export class ChartUniversalComponent implements OnInit{
@Input() chartOptions;
@Output() GoBack  = new EventEmitter();

    dataSource: Object;
    constructor(
        private zone: NgZone) {
    }

    ngOnInit(): void {
        const dataSource = {
     
        chart: {
            showLegend: true,
            exportenabled: true,
            exportAtClientSide: true,
            theme: 'candy',
            yaxis: this.chartOptions.configurations.yaxis,
            caption: this.chartOptions.configurations.caption,
            subcaption: this.chartOptions.configurations.subcaption,
            configureLink: {
                show: true
            }
        },

        data: this.chartOptions.data,
        linkeddata: this.chartOptions.linkeddata
      


        };
        this.dataSource = dataSource;
    }

    initialized($event) {
       console.log('it has been initialized')
        // this.chart = $event.chart; // Storing the chart instance
      }


    goBack(): void {
        this.GoBack.emit();
      }
    

}
