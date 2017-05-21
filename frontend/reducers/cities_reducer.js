import { RECEIVE_CITIES, RECEIVE_CITY, RECEIVE_ERRORS } from '../actions/cities_action';

const nullCity = [{
  id: "",
  name: "",
  image_url: ""
}];

const citiesReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_CITIES:
      return action.cities
    case RECEIVE_CITY:
      return [
        action.city
      ]
    default:
      return state;
  }
}

export default citiesReducer;
