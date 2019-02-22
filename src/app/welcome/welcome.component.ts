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

  // public ConstructorName(){ }
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    // this is an example of an observable
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    console.log('last line of getWelcomeMessage')
  }


  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message
  }
}

export class Class1 {

}
