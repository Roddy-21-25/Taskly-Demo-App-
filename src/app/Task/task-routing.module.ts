import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseBoxTaskComponent } from './Pages/base-box-task/base-box-task.component';

const routes: Routes = [
  {
    path:'', component: BaseBoxTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
