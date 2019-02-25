import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { RouteGuardService } from '../service/route-guard.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {


  // list of todos
  todos: Todo[]
  // [
  //   //EXAMPLE OF A STRUCTURE FORMAT OF ADDING DATA TO A CLASS
  //   new Todo(1, 'Learn To Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit Canada', false, new Date())


  //   //EXAMPLE OF A UNSTRUCTURED FORMAT OF ADDING DATA TO A CLASS
  //   // { id: 1, description: 'Learn to Dance'},    
  //   // { id: 2, description: 'Become an Expert at Angular'},
  //   // { id: 3, description: 'Visit Canada'}
  // ]


  // // example of an object in type script
  // todo = {
  //     id: 1,
  //     description: 'Learn to Dance'
  // }

  message: string

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    // when hitting a http method make sure to always return back as observable 
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of ${id} Succcessful!`
        // instead of using this:
        // document.getElementById(`${id}`).remove();
        // use this to reflect what data is on the server unless you have a massive performance issue
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  addTodo(id) {

    // by putting -1 we are saying we don't want any data in the form as we are trying to create a new todo
    this.router.navigate(['todos', -1]);
  }
}
