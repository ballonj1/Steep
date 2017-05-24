import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_ERRORS } from "../actions/events_actions";
import merge from 'lodash/merge';

const eventsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_EVENT:
      const newState = merge([], state, [action.event])
      return newState;
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default eventsReducer;
