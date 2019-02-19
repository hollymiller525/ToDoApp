import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  // creation of authenticate method
  authentication(username, password) {

    if (username === 'in28minutes' && password === 'dummy') {

      // when user is added it sets in session storage
      sessionStorage.setItem('authenticaterUser', username);

      return true;

    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }


  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
