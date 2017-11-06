import * as _ from 'lodash';
import * as DemoActions from '../actions/demo.actions';
import { Demo } from '../../models/demo';

export interface State {
  data: Demo;
}

const initialState: State = {
  data: {
      someProp: 'test'
  }
};

export function reducer(state = initialState, action: DemoActions.Actions): State {
  switch (action.type) {
    case DemoActions.DEMO_ACTION:
      return handleDemo(state, action);

    default:
      return state;
  }
}

export function handleDemo(state, action) {
  const newStoreState = _.cloneDeep(state);

  return newStoreState;
}

export const getDemoData = (state: State) => state.data;
