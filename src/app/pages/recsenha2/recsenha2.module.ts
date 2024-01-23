import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recsenha2PageRoutingModule } from './recsenha2-routing.module';

import { Recsenha2Page } from './recsenha2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recsenha2PageRoutingModule
  ],
  declarations: [Recsenha2Page]
})
export class Recsenha2PageModule {}
