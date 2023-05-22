import { Component } from '@angular/core';
import { todo } from './../todo';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  checked(todo: todo) {
    const index = AppComponent.list.indexOf(todo);
    if (AppComponent.list[index].strike === "text-decoration-line-through") {
      AppComponent.list[index].strike = "text-decoration-none";
    } else {
      AppComponent.list[index].strike = "text-decoration-line-through";
    }
    localStorage.setItem("list", JSON.stringify(AppComponent.list));
    console.log("checked");
  }
  removed(todo: todo) {
    const index = AppComponent.list.indexOf(todo);
    AppComponent.list.splice(index, 1);
    console.log("removed");
    localStorage.setItem("list", JSON.stringify(AppComponent.list));
  }
  list() {
    return AppComponent.list;
  }
  static passvar:any;
  static ed: any = 'd-none';
  static view: any = 'd-block';
  edit(todo: todo) {
    TodoListComponent.passvar=todo;
    if (TodoListComponent.ed == "d-block") {
      AppComponent.bt = 'd-none';
      TodoListComponent.ed = 'd-none';
      TodoListComponent.view = 'd-block';
    } else {
      AppComponent.bt = 'd-flex';
      TodoListComponent.ed = "d-block";
      TodoListComponent.view = 'd-none';
    }
  }
  view(){
    return TodoListComponent.view;
  }
  ed(){
    return TodoListComponent.ed;
  }
}