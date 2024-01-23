import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {
  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor(private route: Router) { }


  cadastrar() {
    this.route.navigate(['/cadastrar']);
  }
  inicio() {
    this.route.navigate(['/inicio']);
  }
  recsenha() {
    this.route.navigate(['/recsenha']);
  }
  permissoes() {
    this.route.navigate(['/tabs']);


  }
  ngOnInit() {
  }

}
