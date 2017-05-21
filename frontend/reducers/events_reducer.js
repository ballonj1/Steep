import { RECEIVE_EVENTS, RECEIVE_ERRORS } from "../actions/events_actions";

const eventsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default eventsReducer;
