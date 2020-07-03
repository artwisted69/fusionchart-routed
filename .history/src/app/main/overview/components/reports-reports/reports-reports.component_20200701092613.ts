import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-reports',
  templateUrl: './reports-reports.component.html',
  styleUrls: ['./reports-reports.component.scss']
})
export class ReportsReportsComponent implements OnInit {
    
    currentTemplate = 'reportsMain';

  constructor() { }

  ngOnInit(): void {
  }

}
