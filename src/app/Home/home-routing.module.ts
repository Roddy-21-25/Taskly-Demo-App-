import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseBoxComponent } from './Pages/base-box/base-box.component';

const routes: Routes = [
  {
    path:'', component: BaseBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
