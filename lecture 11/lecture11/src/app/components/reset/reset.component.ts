import { Component, OnInit } from '@angular/core';
import * as counterActions from '../../store/actions/counter';
import * as fromRoot from '../../store/reducers/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'reset-counter',
    templateUrl: 'reset.component.html',
    styleUrls: [
        'reset.component.css'
    ]
})
export class ResetComponent implements OnInit {
    min$: Observable<number>;
    max$: Observable<number>;


    constructor(private store: Store<fromRoot.State>) {}

    ngOnInit() {
        this.min$ = this.store.select(fromRoot.getMin);
        this.max$ = this.store.select(fromRoot.getMax);
    }

    reset() {
        this.store.dispatch(new counterActions.ResetValue);
    }
}