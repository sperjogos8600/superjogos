import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recsenha',
  templateUrl: './recsenha.page.html',
  styleUrls: ['./recsenha.page.scss'],
})
export class RecsenhaPage implements OnInit {
  email!: string;
  emailEntered: boolean = false;

  checkEmail() {
    this.emailEntered = !!this.email;
  }

  constructor(private route: Router) { }


  recsenha2() {
    this.route.navigate(['/recsenha2']);
  }
  ngOnInit() {
  }

}
