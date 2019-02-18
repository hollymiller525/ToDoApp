// THIS IS LIKE JAVA WHERE THEY TAKE CLASSES AND PUT THEM IN PACKAGES
//package com.in28minutes.springboot.web;

// to use a class from another module you must import them
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

 // you don't have to implement the OnInit method
export class WelcomeComponent implements OnInit {

  name=''

  // public ConstructorName(){ }
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   this.name = this.route.snapshot.params['name']
  }

}
