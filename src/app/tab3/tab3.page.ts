import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
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
