import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {
  passwordVisible = false;
  email: string = '';
  password: string = '';

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor(private route: Router, private toastController: ToastController) { }


  cadastrar() {
    this.route.navigate(['/cadastrar']);
  }
  inicio() {
    this.route.navigate(['/inicio']);
  }
  recsenha() {
    this.route.navigate(['/recsenha']);
  }
  async permissoes() {
   // Verifique se o email e senha são os dados fixos esperados
  if (this.email === 'admin@admin.com' && this.password === 'admin123') {
    this.route.navigate(['/tabs']);
  } else {
    // Caso contrário, exiba um toast informando que as credenciais estão incorretas
    const toast = await this.toastController.create({
      message: 'Credenciais incorretas. Por favor, verifique seus dados.',
      duration: 3000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
}
  ngOnInit() {
  }

}
