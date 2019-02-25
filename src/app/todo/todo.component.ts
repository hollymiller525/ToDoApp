import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // grabbing the correct id from the url
    this.id = this.route.snapshot.params['id']

    // if service takes to long to return data this line of code makes sure that the todo object isn't empty
    this.todo = new Todo(this.id, '', false, new Date())

    // only call this if there is an id present ( when its a new to do don't need to call the service to retrive the data as there isn't any)
    if (this.id != -1) {
      // able to return all the data from the todo
      this.todoService.retrieveTodo('in28minutes', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    // don't call an update call a create instead 
    //CREATE
    if (this.id != -1) {
      this.todoService.createTodo('in28minutes', this.todo).subscribe(
        data => {
          console.log(data)

          this.router.navigate(['todos'])
        }
      )
    }

    //UPDATE
    else {
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
        data => {
          console.log(data)

          this.router.navigate(['todos'])
        }
      )
    }
  }
}
