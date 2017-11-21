import * as _ from 'lodash';
import * as TagActions from '../actions/tag.actions';
import { Tag } from '../../models/tag';


export interface State {
  list: { [key: string]: Tag};
  selected: Tag;
}

const initialState: State = {
  list: {},
  selected: null
};

export function reducer(state = initialState, action: TagActions.Actions): State {
  switch (action.type) {
    case TagActions.GET_TAGS_SUCCESS:
      return handleGetTagsSuccess(state, action);

    case TagActions.SELECT_TAG:
      return handleSelectTag(state, action);

    default:
      return state;
  }
}

export function handleGetTagsSuccess(state, action) {
  const newStoreState: State = _.cloneDeep(state);
  newStoreState.list = _.keyBy(action.payload, 'tagId');
  return newStoreState;
}

export function handleSelectTag(state, action) {
  const newStoreState: State = _.cloneDeep(state);
  newStoreState.selected = action.payload;
  return newStoreState;
}

export const getTags = (state: State) => _.values(state.list);
