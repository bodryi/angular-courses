import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from '@angular/core';
import { TodoModel } from "../../models/todo.model";

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls : [
        'todo-list.component.css'
    ]
})
export class TodoListComponent implements OnInit {
    @Input() todoList: Array<TodoModel> = [];
	@Output() todoClicked: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

	todoClick(id: number) {
		this.todoClicked.emit(id);
	}

}