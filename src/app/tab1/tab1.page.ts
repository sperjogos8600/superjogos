import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route: Router) { }


  chave() {
    this.route.navigate(['/chave']);
  }

  pix() {
    this.route.navigate(['/pix']);
  }
}
