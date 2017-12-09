export interface ITodo {
	id: number;
	name?: string;
	checked?: boolean;
	subTodos?: Array<SubTodoModel>
}

export interface ISubTodo {
	id?: number;
	name?: string;
}

export class SubTodoModel {
	id: number;
	name: string;

	constructor(model?: ISubTodo) {
		if(model) {
			this.id = model.id || null;
			this.name = model.name || '';
		}
		else {
			this.id = null;
			this.name = '';
		}
	}
}

export class TodoModel {
	id: number;
	name: string;
	checked: boolean;
    subTodos: Array<SubTodoModel>;

	constructor(model?: ITodo) {
		if(model) {
			this.id = model.id;
			this.name = model.name || 'default name';
			this.checked = model.checked || false;
			this.subTodos = model.subTodos || [];
		}
		else {
			this.id = 1;
			this.name = 'default name';
			this.checked = false;
			this.subTodos = [];
		}
	}
}
