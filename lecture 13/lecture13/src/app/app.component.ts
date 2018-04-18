import { Component } from '@angular/core';
import {DumbService} from './services/dumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(public dumbService: DumbService) {}
}
