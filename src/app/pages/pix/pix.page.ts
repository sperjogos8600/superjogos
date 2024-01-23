import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { ValorModalComponent } from 'src/app/valor-modal/valor-modal.component';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.page.html',
  styleUrls: ['./pix.page.scss'],
})
export class PixPage implements OnInit {


    constructor( private route: Router, private modalController: ModalController) {}

    async presentModal() {
      const modal = await this.modalController.create({
        component: ValorModalComponent,
        backdropDismiss: true,
        cssClass: 'custom-modal',
        showBackdrop: true
      });

      await modal.present();
    }

    pix2() {
      this.route.navigate(['/pix2']);
    }


  ngOnInit() {
  }

}
