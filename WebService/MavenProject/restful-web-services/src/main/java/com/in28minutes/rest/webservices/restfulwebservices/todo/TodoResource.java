package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.rest.webservices.restfulwebservices.todo.Todo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {

	@Autowired
	private TodoHardcodedService todoService;

	// Retrieve all Todos for a User - GET
	@GetMapping("/users/{username}/todos")
	// creating a get method
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAll();
	}

	// Delete a Todo for a User - DELETE
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
	
		Todo todo = todoService.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}	
		
		return ResponseEntity.notFound().build();
	}
	
	// this method finds a to do by its id ( passing in correct username and correct id to get this information)
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		return todoService.findById(id);
	}
	
	//Edit a Todo - PUT
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo)
	{
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	//Add a new Todo - POST
	// doesn't have an id in the mapping uri as it will need to be assigned during the creation of the todo
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> newTodo(@PathVariable String username, @RequestBody Todo todo){
		
		Todo createdTodo = todoService.save(todo);
		
		// what you typically return for a post request is:
		// what is the url of the created resource (location)
		//Get current resource uri by using ServletUriComponentsBuilder:
		URI uri =ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		
		return ResponseEntity.created(uri).build();
	}
}
