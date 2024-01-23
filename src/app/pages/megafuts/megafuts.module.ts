import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegafutsPageRoutingModule } from './megafuts-routing.module';

import { MegafutsPage } from './megafuts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MegafutsPageRoutingModule
  ],
  declarations: [MegafutsPage]
})
export class MegafutsPageModule {}
