import * as APIUtil from '../util/events_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_CITIES = 'RECEIVE_CITIES';

export const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  event
})

export const receiveEvents = (events = {}) => ({
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

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
})

export const destroyEvent = (event_id) => (dispatch) => (
  APIUtil.destroyEvent(event_id)
    .then((event) => dispatch(destroyEvent(event)))
)

export const fetchEvents = (city_id) => (dispatch) => (
  APIUtil.fetchEvents(city_id)
  .then((events) => dispatch(receiveEvents(events)),
                (errors) => dispatch(receiveErrors(errors)))
)

export const createEvent = ({ event }) => (dispatch) => (
  APIUtil.createEvent({ event })
    .then((event) => dispatch(receiveEvent(event)),
                  (errors) => dispatch(receiveErrors(errors)))
)

export const updateEvent = (event_id, current_attend) => (dispatch) => (
  APIUtil.updateEvent(event_id, current_attend).then((cities) => dispatch(receiveCities(cities)))
)
