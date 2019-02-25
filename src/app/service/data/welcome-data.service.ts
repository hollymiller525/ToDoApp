import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

    // can specify in the get what structure you are expecting to be returned
    return this.http.get<HelloWorldBean>('http://localhost:8181//hello-world-bean')
  }

  // creating a get request that passes a path variable
  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8181//hello-world/path-variable/${name}`)
  }
}
