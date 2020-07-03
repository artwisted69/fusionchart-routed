import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-reports-reports',
  templateUrl: './reports-reports.component.html',
  styleUrls: ['./reports-reports.component.scss'],
  animations : fuseAnimations
})
export class ReportsReportsComponent implements OnInit, AfterViewInit {
    
    @ViewChild('reportsContainer', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
    @ViewChild('reportsMain', {static: false}) reportsMain: TemplateRef<any>;
    @ViewChild('sales', {static: false}) sales: TemplateRef<any>;
    @ViewChild('compLoader', {static: false}) compLoader: TemplateRef<any>;

  constructor(
      private cfr: ComponentFactoryResolver
  ) { }

  componentRef: ComponentRef<any>;

  ngOnInit(): void {
      
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
      this.container.createEmbeddedView(this.compLoader);
  }

  goBack(): void {
      this.container.clear();
      this.container.createEmbeddedView(this.reportsMain);
  }

}
