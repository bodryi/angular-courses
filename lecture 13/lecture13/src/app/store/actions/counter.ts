import { type } from '../../utils/action-type.util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
  INCREASE_VALUE: type('[Counter] Increase value'),
  DECREASE_VALUE: type('[Counter] Decrease value'),
  RESET_VALUE: type('[Counter] Reset value'),
};

export class IncreaseValue implements Action {
    readonly type = ActionTypes.INCREASE_VALUE;

    constructor(public payload?: number) {}
}

export class DecreaseValue implements Action {
    readonly type = ActionTypes.DECREASE_VALUE;

    constructor(public payload?: number) {}
}

export class ResetValue implements Action {
    readonly type = ActionTypes.RESET_VALUE;

    constructor() {}
}

export type Actions = IncreaseValue | DecreaseValue | ResetValue;
