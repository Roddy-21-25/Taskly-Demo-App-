import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./Task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./Note/note.module').then(m => m.NoteModule)
  },
  {
    path: '**',
    loadChildren: () => import('./Page-Not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
