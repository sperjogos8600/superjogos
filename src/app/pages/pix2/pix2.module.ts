import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pix2PageRoutingModule } from './pix2-routing.module';

import { Pix2Page } from './pix2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pix2PageRoutingModule
  ],
  declarations: [Pix2Page]
})
export class Pix2PageModule {}
