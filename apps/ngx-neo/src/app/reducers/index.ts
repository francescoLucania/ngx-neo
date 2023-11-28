import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { COUNTER_KEY, counterReducer, CounterState } from './counter';

export interface State {
  [COUNTER_KEY]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
