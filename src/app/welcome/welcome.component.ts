// THIS IS LIKE JAVA WHERE THEY TAKE CLASSES AND PUT THEM IN PACKAGES
//package com.in28minutes.springboot.web;

// to use a class from another module you must import them
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// you don't have to implement the OnInit method
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService: string
  errorMessage: string
  serviceSuccessfulMessage: string

  // public ConstructorName(){ }
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // this is an example of an observable
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),

      //specifying a common error response - if there is an error do the following
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    // grabbing the response from the web service
    this.welcomeMessageFromService = response.message

    this.serviceSuccessfulMessage = response.message
  }

  handleErrorResponse(error) {
    // grabbing the error message from the web service
    this.welcomeMessageFromService = error.error.message
    this.errorMessage = error.error.message
  }

  // this method ensures that path variable is inserted into the http web service
  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }
}

export class Class1 {

}
