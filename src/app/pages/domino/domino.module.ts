import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominoPageRoutingModule } from './domino-routing.module';

import { DominoPage } from './domino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominoPageRoutingModule
  ],
  declarations: [DominoPage]
})
export class DominoPageModule {}
