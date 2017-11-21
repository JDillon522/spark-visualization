import * as _ from 'lodash';
import * as DetailsActions from '../actions/details.actions';
import { Tag } from '../../models/tag';
import { DataPoint } from '../../models/dataPoint';


export interface State {
  data: DataPoint[];
}

const initialState: State = {
  data: []
};

export function reducer(state = initialState, action: DetailsActions.Actions): State {
  switch (action.type) {
    case DetailsActions.GET_DETAILS_SUCCESS:
      return handleGetDetailsSuccess(state, action);

    default:
      return state;
  }
}

export function handleGetDetailsSuccess(state, action) {
  const newStoreState: State = _.cloneDeep(state);
  newStoreState.data = action.details;
  return newStoreState;
}

export const getDetails = (state: State) => state.data;
