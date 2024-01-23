import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MegafutsPage } from './megafuts.page';

const routes: Routes = [
  {
    path: '',
    component: MegafutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MegafutsPageRoutingModule {}
