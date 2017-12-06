import { Injectable } from '@angular/core';
import { TodoModel } from "../models/todo.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class TodoService {

  private todos: Array<TodoModel> = [];

  constructor() {
    this.todos = [
      new TodoModel({
                      id     : 1,
                      name   : 'Todo 1',
                      checked: false
                    }),
      new TodoModel({
                      id     : 2,
                      name   : 'Todo 2',
                      checked: false
                    }),
      new TodoModel({
                      id     : 3,
                      name   : 'Todo 3',
                      checked: false
                    })
    ];
  }

  getTodos(): Array<TodoModel> {
    return this.todos;
  }

  addTodo(todo: TodoModel) {
    // let array = this.todos;
    this.todos.push(todo);
    // this.todos = [...array];
  }

}
