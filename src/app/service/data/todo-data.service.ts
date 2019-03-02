import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';
import { TODO_JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username) {
    // should be an array of todos
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }


  deleteTodo(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username, id) {
    // mapping the data structure of <Todo> in not an array this time as it is only returning back one todo
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }


  // the todo needs to be passed to ensure that the details of the todo are updated
  updateTodo(username, id, todo) {

    // the url here is passing three arguements ( username, id and the body(todo))
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo)
  }

  // the todo needs to be passed to ensure that the details of the todo are updated
  createTodo(username, todo) {

    // the url here is passing two arguements ( username, the body(todo))
    // the id is not present in this uri as you are creating the todo so doesn't have a id to search for
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo)
  }
}
