import * as APIUtil from '../util/cities_util.js';

export const RECEIVE_CITY = 'RECEIVE_CITY';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCity = (city) => ({
  type: RECEIVE_CITY,
  city
})

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const fetchCity = (id) => (dispatch) => (
  APIUtil.fetchCity(id)
    .then((city) => dispatch(receiveCity(city)),
          (errors) => dispatch(receiveErrors(errors.responseJSON)))
)

export const fetchCities = () => (dispatch) => (
  APIUtil.fetchCities()
    .then((cities) => {

      return dispatch(receiveCities(cities))
    },
        (errors) => dispatch(receiveCities(errors.responseJSON)))
)
