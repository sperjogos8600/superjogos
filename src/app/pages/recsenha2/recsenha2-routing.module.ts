import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recsenha2Page } from './recsenha2.page';

const routes: Routes = [
  {
    path: '',
    component: Recsenha2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recsenha2PageRoutingModule {}
