import { IncreaseValue, DecreaseValue } from './../../store/actions/counter';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from '../../store/actions/counter';
import * as fromRoot from '../../store/reducers/reducers';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'counter',
    templateUrl: 'counter.component.html',
    styleUrls: [
        'counter.component.css'
    ]
})
export class CounterComponent implements OnInit {
    counterValue$: Observable<number>;


    constructor(private store: Store<fromRoot.State>) {}

    ngOnInit() {
        this.counterValue$ =
            this.store.select(fromRoot.getValue);
    }

    increase() {
        this.store.dispatch(new counterActions.IncreaseValue(3));
    }

    decrease() {
        this.store.dispatch(new counterActions.DecreaseValue());
    }
}