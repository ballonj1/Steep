import * as APIUtil from '../util/events_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveEvents = (events = []) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (event = {}) => ({
  type: RECEIVE_EVENT,
  event
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const fetchEvents = (city_id) => (dispatch) => (
  APIUtil.fetchEvents(city_id)
  .then((events) => dispatch(receiveEvents(events)),
                (errors) => dispatch(receiveErrors(errors)))
)

export const createEvent = (date, time, address, description, host_id, city_id, max_attend, current_attend) => (dispatch) => (
  APIUtil.createEvent(date, time, address, description, host_id, city_id, max_attend, current_attend)
    .then((event) => dispatch(receiveEvent(event)))
)
