import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  // creation of authenticate method
  authentication(username, password){
    console.log('before ' + this.isUserLoggedIn())

    if(username==='in28minutes' && password==='dummy'){

      // when user is added it sets in session storage
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn())
      return true;
    } else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
}
