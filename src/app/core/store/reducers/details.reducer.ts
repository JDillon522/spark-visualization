import * as _ from 'lodash';
import * as DetailsActions from '../actions/details.actions';
import { DataPoint } from '../../models/dataPoint';
import * as moment from 'moment';
import { LineChart } from '../../models/chartTypes';

export interface State {
  data: LineChart;
}

const initialState: State = {
  data: null
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
  newStoreState.data = formatLineChart(action.details, '2017-11-21', '2017-11-23');
  return newStoreState;
}

export const getDetails = (state: State) => state.data;

function formatLineChart(data, start, end): LineChart {
  const durationInHours = Math.abs(moment(start).diff(moment(end), 'hours'));
  const labels: string[] = [];
  const dayLabels: string[] = [start, end];

  // Reduce the magnituted of data to points pulled on the hour
  const chunkedData = _.chunk(data, data.length / durationInHours);
  const reducedChunks = _.map(chunkedData, (chunk: DataPoint[]) => chunk[0].value);

  // Create the list of labels
  for (let index = 0; index < durationInHours; index++) {
    if (index % 24 === 0) {
      labels.push(dayLabels.shift());
    } else {
      labels.push((index % 24).toString());
    }
  }

  const lineChart = {
    labels: labels,
    datasets: []
  };

  lineChart.datasets.push({
    data: reducedChunks,
    label: `${start} to ${end}`
  });
  return lineChart;
}
