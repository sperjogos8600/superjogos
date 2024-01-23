import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChavePageRoutingModule } from './chave-routing.module';

import { ChavePage } from './chave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChavePageRoutingModule
  ],
  declarations: [ChavePage]
})
export class ChavePageModule {}
