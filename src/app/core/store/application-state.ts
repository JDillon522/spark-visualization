import { Action, ActionReducer, ActionReducerMap, MetaReducer, } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as fromTags from './reducers/tag.reducer';
import * as fromDetails from './reducers/details.reducer';

export interface State {
    tags: fromTags.State;
    details: fromDetails.State;
}

export const reducers: ActionReducerMap<State> = {
    tags: fromTags.reducer,
    details: fromDetails.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

// Tag
export const getTagState = (state: State) => state.tags;
export const getTagData = createSelector(getTagState, fromTags.getTags);
export const getSelectedTag = createSelector(getTagState, fromTags.getSelectedTag);

// Details
export const getDetailsState = (state: State) => state.details;
export const getDetails = createSelector(getDetailsState, fromDetails.getDetails);
