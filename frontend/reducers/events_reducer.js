import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_ERRORS } from "../actions/events_actions";
import _ from 'lodash';

const eventsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_EVENT:
      const newState = _.merge({}, state, action.event)
      return _.values(newState);
    case RECEIVE_EVENTS:
      return _.values(action.events);
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default eventsReducer;
