import {
	Component,
	OnInit,
	Input
} from '@angular/core';

@Component({
    selector: 'counter',
    template: `
	<p *ngIf="completedTasksCount !== allTasksCount">Tasks completed: {{completedTasksCount}} of {{allTasksCount}}</p>
	<p *ngIf="completedTasksCount === allTasksCount">All tasks completed!!</p>
`,
	styles: [`
		
	`]
})
export class CounterComponent implements OnInit {
    @Input() allTasksCount: number = 0;
    @Input() completedTasksCount: number = 0;

	constructor() { }

    ngOnInit() { }

}