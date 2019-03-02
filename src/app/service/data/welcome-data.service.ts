import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWorldBean {
  // this is defining the structure of the response
  constructor(public message: string) { }

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  // method that will trigger the hello world service (java)
  executeHelloWorldBeanService() {

    // can specify in th e get what structure you are expecting to be returned
    return this.http.get<HelloWorldBean>('http://localhost:8181//hello-world-bean')
  }

  // creating a get request that passes a path variable
  executeHelloWorldServiceWithPathVariable(name) {

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // //creating an instance of a http header
    // let header = new HttpHeaders(
    //   // can provide an object 
    //   {
    //     // the type of header you want to send
    //     Authorization: basicAuthHeaderString
    //   }
    // )
    return this.http.get<HelloWorldBean>(`http://localhost:8181/hello-world/path-variable/${name}`
    // // the first header is a constant and the other header represents the variable header
    // {headers :  header}
    )
  }


  // createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes'
  //   let password = 'dummy'

  //   // Windows base 64 format string
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

  //   return basicAuthHeaderString;
  // }
}
