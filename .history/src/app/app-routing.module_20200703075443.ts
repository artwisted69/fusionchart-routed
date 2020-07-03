import { ChartComboComponent } from './shared/fusion-charts/chart-combo/chart-combo.component';
import { VerticalLayout1Component } from './layout/vertical/layout-1/layout-1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    //{ path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '', component: ChartComboComponent},
    { path: '', loadChildren: () => import('./auth-feature/auth.module').then(m => m.AuthModule) },
    { 
        path: 'app',
        component: VerticalLayout1Component,
        children: [
            { path: 'overview', loadChildren: () => import('./main/overview/overview.module').then(m => m.OverviewModule)  },
            { path: 'chart', component: ChartComboComponent}
        ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
