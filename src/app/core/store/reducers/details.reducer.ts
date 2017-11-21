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
  newStoreState.data = formatLineChart(action.details, action.start, action.end);
  return newStoreState;
}

export const getDetails = (state: State) => state.data;

function formatLineChart(data, start, end): LineChart {
  const durationInHours = Math.abs(moment(start).diff(moment(end), 'hours'));
  let startMoment = moment(start, 'YYYY-MM-DD');
  const labels: string[] = [];

  // Reduce the magnitude of data to points pulled on the hour
  const chunkedData = _.chunk(data, data.length / durationInHours);
  const reducedChunks = _.map(chunkedData, (chunk: DataPoint[]) => {
    switch (typeof chunk[0].value) {
      case 'boolean':
        return chunk[0].value ? 1 : 0;

      case 'number':
        return chunk[0].value;

      case 'string':
        return chunk[0].value === 'On' ? 1 : 0;

      default:
        break;
    }

  });

  // Create the list of labels
  for (let index = 0; index < durationInHours; index++) {
    if (index % 24 === 0) {
      labels.push(startMoment.format('YYYY-MM-DD'));
      startMoment = startMoment.add(1, 'd');

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

function formatPieChart(data) {

  return data;
}
