import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'in28minutes'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    // setting a header to be attached to the request that is sent
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })


    // intercept method acts filter need to help it send request
    // sending the modified request ( that includes the http header)
    return next.handle(request);
  }
}
