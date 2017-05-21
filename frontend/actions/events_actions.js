import * as APIUtil from '../util/events_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveEvents = (events = []) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const fetchEvents = (city_id) => (dispatch) => (
  APIUtil.fetchEvents(city_id)
  .then((events) => dispatch(receiveEvents(events)),
                (errors) => dispatch(receiveErrors(errors)))
)
