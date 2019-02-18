import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';

// welcome
const routes: Routes = [
  // this is an array so can have multiple routes
  {
    // which path you would like to expose and which component defines that
    path: 'login', component: LoginComponent
  },
  // showing that the path route needs a parameter name
  {
    path: 'welcome/:name', component: WelcomeComponent
  },
  // default path will show the login page 
  {
    path: '', component: LoginComponent
  },
  {
    path: 'todos', component: ListTodosComponent
  },

  // ITS IMPORTANT TO KEEP THIS AT THE BOTTOM
  // if your inserts a path that doesn't exist will show the error page
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
