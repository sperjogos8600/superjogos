import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { ValorModalComponent } from 'src/app/valor-modal/valor-modal.component';


@Component({
  selector: 'app-chave',
  templateUrl: './chave.page.html',
  styleUrls: ['./chave.page.scss'],
})
export class ChavePage implements OnInit {
  svgButtons = [
    {
      path: 'assets/nubank.svg',
      selectedPath: 'assets/nucolorido.svg',
      selected: false
    },
    {
      path: 'assets/itau.svg',
      selectedPath: 'assets/itaucor.png',
      selected: false
    }
  ];

  toggleSVG(svgButton: any) {
    svgButton.selected = !svgButton.selected;
  }

  isAnySVGSelected() {
    return this.svgButtons.some(svgButton => svgButton.selected);
  }



  constructor( private route: Router, private modalController: ModalController) {}

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ValorModalComponent,
  //     backdropDismiss: true,
  //     cssClass: 'custom-modal',
  //     showBackdrop: true
  //   });

  //   await modal.present();
  // }
  pix() {
    this.route.navigate(['/valor']);
  }

  ngOnInit() {
  }

}
