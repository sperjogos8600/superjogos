import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominoPage } from './domino.page';

const routes: Routes = [
  {
    path: '',
    component: DominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominoPageRoutingModule {}
