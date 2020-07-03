import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chart-universal',
  templateUrl: './chart-universal.component.html',
  styleUrls: ['./chart-universal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartUniversalComponent implements OnInit{
@Input() chartOptions;
@Output() GoBack  = new EventEmitter();

    dataSource: Object;
    constructor(private cd: ChangeDetectorRef) {
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
        this.cd.detectChanges();
    }


    goBack(): void {
        this.GoBack.emit();
      }
    

}
