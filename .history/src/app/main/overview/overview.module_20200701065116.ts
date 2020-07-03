import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    
    FuseSharedModule
  ]
})
export class OverviewModule { }
