import { NgModule } from '@angular/core';
import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'answer',
    loadChildren: () => import('./answer/answer.module').then(m => m.AnswerModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'answer'
  }
];

const routerOptions: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
