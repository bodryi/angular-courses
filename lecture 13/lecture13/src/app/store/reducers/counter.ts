import { ActionTypes } from './../actions/counter';
import * as counterActions from '../actions/counter';

export interface State {
  value: number;
  max: number;
  min: number;
}

const initialState: State = {
  value: 0,
  max: 0,
  min: 0
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case counterActions.ActionTypes.INCREASE_VALUE: {
      let {value, max} = { ...state } as State;
      value += action.payload ? action.payload : 1;
      max = value > max ? value : max;
      return {
        ...state,
        value,
        max
      };
    }
    case counterActions.ActionTypes.DECREASE_VALUE: {
      let {value, min} = { ...state } as State;
      value -= action.payload ? action.payload : 1;
      min = value < min ? value : min;
      return {
        ...state,
        value,
        min
      };
    }
    case counterActions.ActionTypes.RESET_VALUE: {
      return {
        ...state,
        value: 0
      };
    }
  }

  return state;
}

export const getValue = (state: State) => state.value;
export const getMax = (state: State) => state.max;
export const getMin = (state: State) => state.min;
