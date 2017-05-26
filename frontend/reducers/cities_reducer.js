import { RECEIVE_CITIES, RECEIVE_CITY, RECEIVE_ERRORS } from '../actions/cities_action';
import _ from 'lodash';

const nullCity = [{
  id: "",
  name: "",
  image_url: "",
  events: {
    "" : {
      id: "",
      date: "",
      time: "",
      address: "",
      description: "",
      host_id: "",
      city_id: "",
      max_attend: "",
      current_attend: "",
      event_full: ""
    }
  }
}];

const citiesReducer = (state = nullCity, action) => {
  switch(action.type){
    case RECEIVE_CITIES:
      return _.values(action.cities)
    case RECEIVE_CITY:
      return _.values(action.city)
    default:
      return state;
  }
}

export default citiesReducer;
