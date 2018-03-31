import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {easeInOutAnimation} from './animations/ease-in-out.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [easeInOutAnimation]
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  itemsCollection: Array<{ title: string, state: string }> = [];

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  onAdd(value: { title: string }) {
    this.itemsCollection.push(
      {title: value.title, state: 'inactive'});
    this.myForm.reset();
  }

  onRemove(index: number) {
    this.itemsCollection.splice(index, 1);
  }

  toggleState(item: { title: string, state: string }) {
    item.state = item.state === 'inactive' ? 'active' : 'inactive';
  }
}
