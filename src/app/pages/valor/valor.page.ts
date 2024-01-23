import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-valor',
  templateUrl: './valor.page.html',
  styleUrls: ['./valor.page.scss'],
})
export class ValorPage implements OnInit {

  constructor(private route: Router) { }


  transacao() {
    this.route.navigate(['/pix']);

  }

  ngOnInit() {
  }

}
