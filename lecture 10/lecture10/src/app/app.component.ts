import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/debounce';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message: string;
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      field1: new FormControl(''),
      field2: new FormControl(''),
    });

    // map
    // this.myForm.valueChanges
    //   .map(val => val.field1)
    //   .subscribe(value => (this.message = value));

    // filter
    // this.myForm.valueChanges
    //     .filter(val => !!val.field1)
    //     .subscribe(value => (this.message = value.field2));

    // takeWhile
    // this.myForm.valueChanges
    //   .takeWhile(val => val.field1.length <= 5 && val.field2.length <= 5)
    //   .subscribe(
    //     value =>
    //       (this.message = `${value.field1.length} - ${value.field2.length}`),
    //     () => {},
    //     () => (this.message = 'Observable completed'),
    //   );

    // merge
    // this.myForm.get('field1').valueChanges
    //   .merge(this.myForm.get('field2').valueChanges)
    //   .subscribe(value => this.message = value);

    // debounce
    // this.myForm.valueChanges
    //   .debounce(() => timer(500))
    //   .map(val => val.field1)
    //   .subscribe(value => (this.message = value));
  }
}
