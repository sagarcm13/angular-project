import { Component,NgModule,} from '@angular/core';
import { AppComponent } from './../app.component';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})

export class AddTodoComponent {
  data: string = '';
  data2: string = '';
  
  title(event: any) {
    this.data = (<HTMLInputElement>event.target).value;
  }
 
  desc(event: any) {
    this.data2 = (<HTMLInputElement>event.target).value;
  }
  addingTodo() {
    if (this.data.replace(/\s/g, '').length === 0 && this.data2.replace(/\s/g, '').length === 0) {
      this.discard();
    } else {
      let obj = {
        title: this.data,
        desc: this.data2,
        idset: this.data.replaceAll(" ", ""),
        strike: this.data.replaceAll(" ", "")
      }
      AppComponent.list.push(obj);
      localStorage.setItem("list",JSON.stringify(AppComponent.list));
    }
    console.log("adding");
    AppComponent.bt = 'd-flex';
    AppComponent.todo = 'd-block';
    AppComponent.add = 'd-none';
  }
  discard() {
    AppComponent.bt = 'd-flex';
    AppComponent.todo = 'd-block';
    AppComponent.add = 'd-none';
    console.log("discard");
  }
}