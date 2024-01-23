import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recsenha3',
  templateUrl: './recsenha3.page.html',
  styleUrls: ['./recsenha3.page.scss'],
})
export class Recsenha3Page implements OnInit {
  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor(private route: Router) { }


  inicio() {
    this.route.navigate(['/inicio']);
  }
  ngOnInit() {
  }

}
