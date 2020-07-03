import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chart-stockturn',
  templateUrl: './chart-stockturn.component.html',
  styleUrls: ['./chart-stockturn.component.scss']
})
export class ChartStockturnComponent implements OnInit {
@Output() GoBack = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.GoBack.emit('sales');
  }

}
