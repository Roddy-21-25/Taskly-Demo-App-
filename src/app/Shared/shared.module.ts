import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { BoxSearchComponent } from './box-search/box-search.component';

@NgModule({
  declarations: [
    NavBarComponent,
    BoxSearchComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    BoxSearchComponent
  ]
})
export class SharedModule { }
