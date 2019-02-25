import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username) {
    // should be an array of todos
    return this.http.get<Todo[]>(`http://localhost:8181/users/${username}/todos`);
  }


  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8181/users/${username}/todos/${id}`)
  }

  retrieveTodo(username, id) {
    // mapping the data structure of <Todo> in not an array this time as it is only returning back one todo
    return this.http.get<Todo>(`http://localhost:8181/users/${username}/todos/${id}`)
  }


  // the todo needs to be passed to ensure that the details of the todo are updated
  updateTodo(username, id, todo) {

    // the url here is passing three arguements ( username, id and the body(todo))
    return this.http.put(`http://localhost:8181/users/${username}/todos/${id}`, todo)
  }
}
