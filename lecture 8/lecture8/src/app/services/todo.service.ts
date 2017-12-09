import { Injectable } from '@angular/core';
import { TodoModel } from "../models/todo.model";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class TodoService {

  //private todos: Array<TodoModel> = [];

  constructor(private httpClient: HttpClient) {
  }

  getTodos(): Promise<Array<TodoModel>> {
    return this.httpClient.get('api/todos')
        .toPromise()
        .then((res) => {
            return res.map(item => new TodoModel(item));
        });
        // .subscribe()
      // return this.todos;
  }

  addTodo(todo: TodoModel): Promise<any> {
      return this.httpClient.post('api/todos', JSON.stringify(todo),
                           { headers: this.getJsonHeaders() }
      )
          .toPromise();
    // let array = this.todos;
    // this.todos.push(todo);
    // this.todos = [...array];
  }

  private getJsonHeaders(): HttpHeaders {
      return new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }

}
