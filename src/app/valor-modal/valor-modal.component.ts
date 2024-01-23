import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-valor-modal',
  templateUrl: './valor-modal.component.html',
  styleUrls: ['./valor-modal.component.scss'],
})
export class ValorModalComponent  implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }


  transacao() {
    this.route.navigate(['/pix2']);

  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  ngOnInit() {}

}
