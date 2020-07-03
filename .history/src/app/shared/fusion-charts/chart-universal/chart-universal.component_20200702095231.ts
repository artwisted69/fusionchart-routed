import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-chart-universal',
  templateUrl: './chart-universal.component.html',
  styleUrls: ['./chart-universal.component.scss']
})
export class ChartUniversalComponent implements OnInit, DoCheck {
@Input() chartOptions;

    dataSource: Object;
    constructor() {

        
      //STEP 2 - Chart Data
   
    }

    ngOnInit(): void {
        console.log(this.chartOptions)
          // STEP 3 - Chart Configuration
        const dataSource = {
     
        chart: {
            showLegend: true,
            exportenabled: true,
            exportAtClientSide: true,
            theme: 'candy',
            yaxis: this.chartOptions.configurations.yaxis,
            caption: this.chartOptions.configurations.caption,
            subcaption: this.chartOptions.configurations.subcaption
        },

        data: this.chartOptions.data,
        linkeddata: this.chartOptions.linkeddata
      


        };
        this.dataSource = dataSource;
    }

    ngDoCheck() {
        console.log('change happened')
    }

    linked(e) {
        console.log(e);
        e.eventObj.preventDefault();
    }

}
