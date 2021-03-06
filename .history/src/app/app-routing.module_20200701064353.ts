import { VerticalLayout1Component } from './layout/vertical/layout-1/layout-1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './main/sample/sample.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '', loadChildren: () => import('./auth-feature/auth.module').then(m => m.AuthModule) },
    { 
        path: 'app',
        component: VerticalLayout1Component,
        children: [
            { path: 'overview', component: SampleComponent }
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
