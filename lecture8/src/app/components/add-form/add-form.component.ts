import {
	Component,
	Input,
	OnInit
} from '@angular/core';
import {
	FormControl,
	FormGroup,
	Validators,
	FormArray
} from "@angular/forms";
import { TodoService } from "../../services/todo.service";
import { TodoModel } from "../../models/todo.model";

@Component({
	           selector   : 'add-form',
	           templateUrl: 'add-form.component.html',
	           styleUrls  : ['add-form.component.css']
           })
export class AddFormComponent implements OnInit {
	myForm: FormGroup;
	initId = 100;

	get subTodos(): FormArray { return this.myForm.get('subTodos') as FormArray; }

	constructor(private todoService: TodoService) {}

	ngOnInit() {
		this.myForm = new FormGroup({
			id      : new FormControl(this.initId++),
			name    : new FormControl('', [Validators.required, Validators.minLength(5)]),
			subTodos: new FormArray([])
		});
	}

	addSubTodo() {
		this.subTodos.push(new FormGroup({
			id  : new FormControl(this.initId++),
			name: new FormControl('', Validators.required)
		}));
	}

	removeSubtodo(i: number) {
		this.subTodos.removeAt(i);
	}

	handleSubmit(value: any) {
		this.todoService.addTodo(Object.assign(new TodoModel(), value));

		this.myForm.reset();
	}
}
