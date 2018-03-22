

import * as fromCounter from './counter';
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

export interface State {
    counter: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
    counter: fromCounter.reducer
};

export const getCounterState = createFeatureSelector<
    fromCounter.State
    >('counter');

export const getValue = createSelector(
    getCounterState, fromCounter.getValue
);
export const getMax = createSelector(getCounterState, fromCounter.getMax);
export const getMin = createSelector(getCounterState, fromCounter.getMin);
