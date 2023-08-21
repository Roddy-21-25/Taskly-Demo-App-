import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { BaseBoxTaskComponent } from './Pages/base-box-task/base-box-task.component';
import { SharedModule } from '../Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BaseBoxTaskComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
