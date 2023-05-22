import { Component } from '@angular/core';
import { todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static list: todo[];
  todo:string|null;
  constructor() {
    this.todo=localStorage.getItem('list');
    if (this.todo==null) {
      AppComponent.list=[];
    } else {
      AppComponent.list=JSON.parse(this.todo);
    }
  }
  public static todo = 'd-block';
  public static add = 'd-none';
  public static bt = 'd-flex';

  addTodo() {
    AppComponent.todo = 'd-none';
    AppComponent.add = 'd-block';
    AppComponent.bt = 'd-none';
  }
  setlistclass() {
    return AppComponent.todo;
  }
  setbtnclass() {
    return AppComponent.bt;
  }
  setaddclass() {
    return AppComponent.add;
  }
}