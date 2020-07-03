import { Component, OnInit, Input, Output, EventEmitter,  NgZone, ViewChild } from '@angular/core';
import { FusionChartsComponent } from 'angular-fusioncharts';

@Component({
  selector: 'app-chart-universal',
  templateUrl: './chart-universal.component.html',
  styleUrls: ['./chart-universal.component.scss'],
})
export class ChartUniversalComponent implements OnInit{
@Input() chartOptions;
@Output() GoBack  = new EventEmitter();
@ViewChild('chart', {static: true}) chart: FusionChartsComponent;
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

    update($event) {
        this.zone.run(() => {
        console.log('zoning')
        });
    }

    goBack(): void {
        this.GoBack.emit();
      }
    

}
