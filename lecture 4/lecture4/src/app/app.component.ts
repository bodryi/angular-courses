import {
	Component,
	OnInit
} from '@angular/core';
import { TodoModel } from "./models/todo.model";
import { TodoService } from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle: string = 'ToDo app';
  todoList: Array<TodoModel> = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  	this.todoList = this.todoService.getTodos();
  }

  toggleTodoStatus(id: number) {
  	let index = this.todoList.findIndex((todo: TodoModel) => todo.id === id);
    this.todoList[index].checked = !this.todoList[index].checked;
  }

	getCompletedTaskCount():number {
	    return this.todoList.filter((todo: TodoModel) => todo.checked).length;
	}

}
