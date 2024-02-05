import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

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
