import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

// when you find yourself using same kind of strings make into a constant to stop spelling errors etc
export const TOKEN = 'authenticaterToken'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  // created a authentication method that doesn't use hardcoded values
  executeAuthenticationService(username, password) {

    // basic authentication string
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    let header = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      }
    )

    // excute the request
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers: header }).pipe(
        // with the data that comes back from this request set it into the session storage
        map(
          data => {
            // setting user name in session storage
            sessionStorage.setItem(AUTHENTICATED_USER, username);

            // setting autentication token in session storage
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);


            // to ensure the response is brought back - whoever subscribing to it can see the data
            return data;
          }
        )
      );
  }

  executeJWTAuthenticationService(username, password) {



    return this.http.post<any>
    (`${API_URL}/authenticate`, {
      //body will contain username and password
      username,
      password
    }).pipe(
        // with the data that comes back from this request set it into the session storage
        map(
          data => {
            // setting user name in session storage
            sessionStorage.setItem(AUTHENTICATED_USER, username);

            // setting autentication token in session storage
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);


            // to ensure the response is brought back - whoever subscribing to it can see the data
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean {
  // this is defining the structure of the response
  constructor(public message: string) { }
}