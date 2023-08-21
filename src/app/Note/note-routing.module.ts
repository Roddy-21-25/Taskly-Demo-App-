import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseNoteComponent } from './Pages/base-note/base-note.component';

const routes: Routes = [
  {
    path: '', component: BaseNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
