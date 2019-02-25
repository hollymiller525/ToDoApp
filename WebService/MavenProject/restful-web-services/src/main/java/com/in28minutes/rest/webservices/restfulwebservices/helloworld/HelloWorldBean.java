package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
	
	//private field called message
	private String message;

	//a hello bean accepting the private field within the constructor and setting to itself
	public HelloWorldBean(String message) {
		this.message = message;
	}
	
	
	public String getMessage() {
		return message;
	}

	// generating a setter
	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
	

}
