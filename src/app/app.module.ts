import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';
import { ValorModalComponent } from './valor-modal/valor-modal.component';
import { PoliticaModalComponent } from './politica-modal/politica-modal.component';

@NgModule({
  declarations: [AppComponent, ValorModalComponent, PoliticaModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
