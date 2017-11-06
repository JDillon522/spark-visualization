import { Action, ActionReducer, ActionReducerMap, MetaReducer, } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as fromDemo from './reducers/demo.reducer';

export interface State {
    demo: fromDemo.State;
}

export const reducers: ActionReducerMap<State> = {
    demo: fromDemo.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

// Demo
export const getDemoState = (state: State) => state.demo;
export const getDemoData = createSelector(getDemoState, fromDemo.getDemoData);
