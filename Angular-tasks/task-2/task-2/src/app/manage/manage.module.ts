import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [

    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }