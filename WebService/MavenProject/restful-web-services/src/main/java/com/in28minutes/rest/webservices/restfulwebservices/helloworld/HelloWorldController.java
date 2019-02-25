package com.in28minutes.rest.webservices.restfulwebservices.helloworld;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller
// allow cross communication between different servers and will need to also specify what servers are allowed
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	//GET
	//URI  -/hello-world 
	
	// method to return hello world
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some Error has happened! Contact Support!");
		return new HelloWorldBean("Hello World");
	}
	
	//hello-world/path-variable/in28minutes
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		
		// the %s would be replaced with the parameter name
		return new HelloWorldBean(String.format("Hello World, %s", name)); 
	}
}
 