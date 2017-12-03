import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filesArray: Array<{name: string, size: number}> = [
    {name: "file 1", size: 10},
    {name: "file 2", size: 1000},
    {name: "file 3", size: 10000},
    {name: "file 4", size: 200009890},
    {name: "file 5", size: 1213120},
    {name: "file 6", size: 13333000},
    {name: "file 7", size: 1000220},
  ];

  dataArray: Array<{title: string, color: string}> = [
    {title: 'title 1', color: 'yellow'},
    {title: 'title 2', color: 'green'},
    {title: 'title 3', color: 'blue'},
    {title: 'title 4', color: 'red'},
    {title: 'title 5', color: ''}
  ];
}
