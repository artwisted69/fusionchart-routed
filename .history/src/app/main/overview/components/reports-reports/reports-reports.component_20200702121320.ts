import { ChartUniversalComponent } from './../../../../shared/fusion-charts/chart-universal/chart-universal.component';
import { ChartTimelineComponent } from './../../../../shared/fusion-charts/chart-timeline/chart-timeline.component';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, ComponentRef, OnDestroy, AfterContentChecked, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import * as StockTurns from './chart-configs/stockturns.config';
import * as Materials from './chart-configs/inventory.config';

@Component({
  selector: 'app-reports-reports',
  templateUrl: './reports-reports.component.html',
  styleUrls: ['./reports-reports.component.scss'],
  animations : fuseAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsReportsComponent implements OnInit, AfterViewInit, OnDestroy {
    
    @ViewChild('reportsContainer', {read: ViewContainerRef, static: true}) container: ViewContainerRef;
    @ViewChild('reportsMain', {static: false}) reportsMain: TemplateRef<any>;
    @ViewChild('sales', {static: false}) sales: TemplateRef<any>;

  constructor(
      private cfr: ComponentFactoryResolver
  ) { }

  componentRef: ComponentRef<any>;

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      console.log('destroyedd')
      this.componentRef.destroy();
  }

  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.reportsMain);
  }


  viewSales(): void {
      this.container.clear();
      this.container.createEmbeddedView(this.sales);
  }

  loadCompLoader(): void {
      this.container.clear();
      const factory = this.cfr.resolveComponentFactory(ChartTimelineComponent);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.chartOptions = {
          configurations: StockTurns.configurations,
          data: StockTurns.data,
          linkeddata: null,
          schema: StockTurns.schema
      };
      this.componentRef.instance.type = 'timeseries';
      this.componentRef.changeDetectorRef.detectChanges();

      this.componentRef.instance.GoBack.subscribe(res => {
        this.viewSales();
      });
  }

 

  loadSample() {
      this.container.clear();
      const factory = this.cfr.resolveComponentFactory(ChartUniversalComponent);
      this.componentRef = this.container.createComponent(factory);
      const options = {
        type: 'column3d',
        configurations: Materials.configurations,
        data: Materials.data,
        linkeddata: Materials.linkedData,
    };
      this.componentRef.instance.chartOptions = options;
      this.componentRef.changeDetectorRef.detectChanges();
      this.componentRef.instance.GoBack.subscribe(res => {
        this.viewSales();
      });
  }






  goBack(): void {
      this.container.clear();
      this.container.createEmbeddedView(this.reportsMain);
  }

}
