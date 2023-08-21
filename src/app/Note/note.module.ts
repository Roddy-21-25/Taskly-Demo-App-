import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { BaseNoteComponent } from './Pages/base-note/base-note.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    BaseNoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule
  ]
})
export class NoteModule { }
