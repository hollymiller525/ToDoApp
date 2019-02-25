package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	// this data will act as our database

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "in28Minutes", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "in28Minutes", "Learn about Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "in28Minutes", "Learn about Angular", new Date(), false));
	}

	// method that will return a list of the todos
	public List<Todo> findAll() {
		return todos;
	}
	
	// simple save method, when adding or updating a todo (shortcut)
	public Todo save(Todo todo) {
		
		// ADDING
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} 
		
		//UPDATING
		else {
			// old todo is deleted
			deleteById(todo.getId());
			
			// new todo is added
			todos.add(todo);
		}
		
		return todo;
	}

	// method for deleting a todo	
	public Todo deleteById(long id) {
		
		// to a search for id
		Todo todo = findById(id);

		// checking if we can find a todo
		if (todo == null)
			return null;

		// checking if we are able to delete the todo
		if (todos.remove(todo)) {
			return todo;
		}

		return null;
	}

	// loops through all the todos and returns back the todos id
	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
