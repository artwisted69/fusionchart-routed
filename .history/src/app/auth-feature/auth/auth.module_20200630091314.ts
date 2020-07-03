import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthRoutingModule } from './auth-routing.module';


const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule,  
    LoginComponent]
})
export class AuthModule { }
