import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-universal',
  templateUrl: './chart-universal.component.html',
  styleUrls: ['./chart-universal.component.scss']
})
export class ChartUniversalComponent implements OnInit {
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

    linked(e) {
        console.log(e);
        e.stoppropagation();
    }

}
