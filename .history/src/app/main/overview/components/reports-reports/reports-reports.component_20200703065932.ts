import { ChartComboComponent } from './../../../../shared/fusion-charts/chart-combo/chart-combo.component';
import { Router } from '@angular/router';
import { ChartUniversalComponent } from './../../../../shared/fusion-charts/chart-universal/chart-universal.component';
import { ChartTimelineComponent } from './../../../../shared/fusion-charts/chart-timeline/chart-timeline.component';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, ComponentRef, OnDestroy, AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import * as StockTurns from './chart-configs/stockturns.config';
import * as Materials from './chart-configs/inventory.config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reports-reports',
  templateUrl: './reports-reports.component.html',
  styleUrls: ['./reports-reports.component.scss'],
  animations : fuseAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsReportsComponent implements OnInit, AfterViewInit, OnDestroy {
    
    @ViewChild('reportsContainer', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
    @ViewChild('reportsMain', {static: false}) reportsMain: TemplateRef<any>;
    @ViewChild('sales', {static: false}) sales: TemplateRef<any>;
    @ViewChild('chart', {static: false}) chart: TemplateRef<any>;

    CompGoBack$: Subscription;

  constructor(
      private cfr: ComponentFactoryResolver,
      private cd: ChangeDetectorRef,
      private router: Router
  ) { 

  }

  componentRef: ComponentRef<any>;
  dataSource:any;

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      console.log('destroyedd')
     // this.componentRef.destroy();
      console.log(this.componentRef);
     // this.CompGoBack$.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.reportsMain);
    this.cd.detectChanges();
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
      this.componentRef = this.container.createComponent(factory,);
      const options = {
        type: 'column3d',
        configurations: Materials.configurations,
        data: Materials.data,
        linkeddata: Materials.linkedData,
    };
      this.componentRef.instance.chartOptions = options;
      this.componentRef.changeDetectorRef.detectChanges();

      this.CompGoBack$ = this.componentRef.instance.GoBack.subscribe(res => {
        this.viewSales();
      });

  }

  loadSampleTemp(): void {
    this.dataSource = {
        chart: {
            showLegend: true,
            exportenabled: true,
            exportAtClientSide: true,
            theme: 'candy',
            yaxis: Materials.configurations.yaxis,
            caption: Materials.configurations.caption,
            subcaption: Materials.configurations.subcaption
        },
        data: Materials.data,
        linkeddata: Materials.linkedData
    };
    this.container.clear();
    this.container.createEmbeddedView(this.chart);
    this.cd.markForCheck();
}

loadNewSample() {
    this.container.clear();
    const factory = this.cfr.resolveComponentFactory(ChartComboComponent);
    this.componentRef = this.container.createComponent(factory,);
}



  goBack(): void {
      this.container.clear();
      this.container.createEmbeddedView(this.reportsMain);
  }

}
