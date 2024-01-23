import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recsenha3PageRoutingModule } from './recsenha3-routing.module';

import { Recsenha3Page } from './recsenha3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recsenha3PageRoutingModule
  ],
  declarations: [Recsenha3Page]
})
export class Recsenha3PageModule {}
