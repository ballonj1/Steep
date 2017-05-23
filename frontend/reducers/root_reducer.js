import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import citiesReducer from './cities_reducer';
import eventsReducer from './events_reducer';
import joinReducer from './join_reducer';
import hostReducer from './host_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  cities: citiesReducer,
  events: eventsReducer,
  joins: joinReducer,
  host: hostReducer
});

export default rootReducer;
