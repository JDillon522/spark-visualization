import { Action, ActionReducer, ActionReducerMap, MetaReducer, } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as fromTags from './reducers/tag.reducer';

export interface State {
    tags: fromTags.State;
}

export const reducers: ActionReducerMap<State> = {
    tags: fromTags.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

// Demo
export const getTagState = (state: State) => state.tags;
export const getTagData = createSelector(getTagState, fromTags.getTags);
