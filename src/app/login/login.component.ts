import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service.';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = 'dummy'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  // instance of the router
  // router instance here is an example of dependency injection
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  // handleLogin() {
  //   if (this.hardcodedAuthenticationService.authentication(this.username, this.password)) {
  //     // redirect to the welcome page
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }


  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)

        // redirects to the welcome page
        this.router.navigate(['welcome', this.username])
      },
      error => {
        console.log("error")
        this.invalidLogin = true
      }
    )
  }
}
