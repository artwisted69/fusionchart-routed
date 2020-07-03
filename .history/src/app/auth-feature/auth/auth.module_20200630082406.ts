import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';


const routes = [
    {
        path     : 'login',
        component: LoginComponent
    }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
