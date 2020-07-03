import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { MatButtonModule } from '@angular/material/button/button-module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FuseSharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],

})
export class AuthModule { }
