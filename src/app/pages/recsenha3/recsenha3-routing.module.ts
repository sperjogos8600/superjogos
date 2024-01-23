import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recsenha3Page } from './recsenha3.page';

const routes: Routes = [
  {
    path: '',
    component: Recsenha3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recsenha3PageRoutingModule {}
