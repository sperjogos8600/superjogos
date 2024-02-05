import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  email :any
  constructor(private authService:AuthServiceService,private router: Router) {}
  ngOnInit(): void {

    this.authService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);

    })
  }

 signOut(){

  this.authService.signOut().then(() =>{
    this.router.navigate(['/landing'])
  })
 }
}
