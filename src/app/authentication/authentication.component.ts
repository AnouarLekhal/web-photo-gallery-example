import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

/*
* simulated authentication
*/
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isConnected:boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.isConnected = this.authenticationService.isConnected;
  }

  onSignIn(dataForm) {

    this.isConnected = this.authenticationService.signIn(dataForm.username, dataForm.password);
    
    if(this.isConnected) {
      this.router.navigate(['gallery']);
    }

    // this.authenticationService.signIn(dataForm.username, dataForm.password).then(
    //   () => {
    //     this.isConnected = this.authenticationService.isConnected;
    //     this.router.navigate(['gallery'])
    //   }
    // )
  }

  onSignOut() {
    this.authenticationService.signOut();
    this.isConnected = this.authenticationService.isConnected;
  }
}
