import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-permissoes',
  templateUrl: './permissoes.page.html',
  styleUrls: ['./permissoes.page.scss'],
})
export class PermissoesPage implements OnInit {

  constructor(private route: Router) { }


  home() {
    this.route.navigate(['/home']);
  }

  ngOnInit() {
  }

}
