import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import citiesReducer from './cities_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  cities: citiesReducer
});

export default rootReducer;
