import merge from 'lodash/merge';
import { RECEIVE_CITIES, RECEIVE_ERRORS } from '../actions/cities_action';


const citiesReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_CITIES:
      return action.cities
    default:
      return state;
  }
}

export default citiesReducer;
