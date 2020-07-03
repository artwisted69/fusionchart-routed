
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './components/reports/reports.component';
import { ChartComboComponent } from '../../shared/fusion-charts/chart-combo/chart-combo.component';
const routes: Routes = [
    { path: '', component: ReportsComponent},
    { path: 'chart', component: ChartComboComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
