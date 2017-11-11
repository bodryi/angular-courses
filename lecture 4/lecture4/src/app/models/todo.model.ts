export interface ITodo {
	id: number;
	name?: string;
	checked?: boolean;
}

export class TodoModel {
	id: number;
	name: string;
	checked: boolean;

	constructor(model: ITodo) {
		if(model) {
			this.id = model.id;
			this.name = model.name || 'default name';
			this.checked = model.checked || false;
		}
		else {
			this.id = 1;
			this.name = 'default name';
			this.checked = false;
		}
	}
}