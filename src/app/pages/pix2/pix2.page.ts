import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pix2',
  templateUrl: './pix2.page.html',
  styleUrls: ['./pix2.page.scss'],
})
export class Pix2Page implements OnInit {

  constructor(private route: Router) { }


  transacao() {
    this.route.navigate(['/transacao']);
  }

  ngOnInit() {
  }

}
