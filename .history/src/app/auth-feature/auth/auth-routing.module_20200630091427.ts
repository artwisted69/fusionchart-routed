import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  export: [ RouterModule]
})
export class AuthRoutingModule { }
