import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PoliticaModalComponent } from 'src/app/politica-modal/politica-modal.component';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor( private route: Router, private modalController: ModalController) {}

    async politica() {
      const modal = await this.modalController.create({
        component: PoliticaModalComponent,
        backdropDismiss: true,
        cssClass: 'politica-modal',
        showBackdrop: true
      });

      await modal.present();
    }
  entrar() {
    this.route.navigate(['/entrar']);
  }

  permissoes() {
    this.route.navigate(['/tabs']);


  }
  ngOnInit() {
  }

}
