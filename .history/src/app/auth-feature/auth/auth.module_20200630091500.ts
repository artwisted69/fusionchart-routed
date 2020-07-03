import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    AuthRoutingModule
  ],

})
export class AuthModule { }
