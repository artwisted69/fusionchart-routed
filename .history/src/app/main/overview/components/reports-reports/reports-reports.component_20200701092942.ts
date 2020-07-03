import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-reports-reports',
  templateUrl: './reports-reports.component.html',
  styleUrls: ['./reports-reports.component.scss']
})
export class ReportsReportsComponent implements OnInit {
    
    currentTemplate: TemplateRef<any>;

    @ViewChild('reportsMain', {static: false}) reportsMain: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
      this.currentTemplate = this.reportsMain;
  }

}
