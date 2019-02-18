import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = 'passwordValue'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  // instance of the router
  // router instance here is an example of dependency injection
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==='in28minutes' && this.password==='dummy'){
      // redirect to the welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
