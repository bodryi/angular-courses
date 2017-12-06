import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { TodoModel } from "../../models/todo.model";

@Component({
             selector   : 'todo-list',
             templateUrl: 'todo-list.component.html',
             styleUrls  : [
               'todo-list.component.css'
             ]
           })
export class TodoListComponent implements OnInit {
  @Input() set todoList(todos: Array<TodoModel>) {
    this._todoList = todos;
    for(let i = 0; i < todos.length; i++)
      this.todosToggleState.push(false);
  }

  get todoList(): Array<TodoModel> {
    return this._todoList;
  }
  _todoList: Array<TodoModel>         = [];
  @Input() todoEditId: number                 = null;
  @Output() todoClicked: EventEmitter<number> = new EventEmitter<number>();

  todosToggleState: Array<boolean> = [];

  constructor() { }

  ngOnInit() { }

  todoClick(id: number) {
    this.todoClicked.emit(id);
  }

  toggleExpand(index: number, event: any) {
    event.stopPropagation();
    this.todosToggleState[index] = !this.todosToggleState[index];
  }

}
