import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-reports-reports',
  templateUrl: './reports-reports.component.html',
  styleUrls: ['./reports-reports.component.scss'],
  animations : fuseAnimations
})
export class ReportsReportsComponent implements OnInit {
    
    currentTemplate: TemplateRef<any>;
    @ViewChild('reportsContainer', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
    @ViewChild('reportsMain', {static: false}) reportsMain: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
      this.currentTemplate = this.reportsMain;
  }

}
