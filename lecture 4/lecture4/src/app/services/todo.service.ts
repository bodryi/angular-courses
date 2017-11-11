import { Injectable } from '@angular/core';
import { TodoModel } from "../models/todo.model";

@Injectable()
export class TodoService {

    constructor() { }

    getTodos() {
    	return [
		    new TodoModel({id: 1, name: 'Todo 1', checked: false}),
		    new TodoModel({id: 2, name: 'Todo 2', checked: false}),
		    new TodoModel({id: 3, name: 'Todo 3', checked: false})
	    ];
    }

}