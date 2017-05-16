import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const receiveErrors = (errors) =>  ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then((loggedInUser) => dispatch(receiveCurrentUser(loggedInUser)),
          (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then((signedUser) => dispatch(receiveCurrentUser(signedUser)),
          (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then((loggedOutUser) => dispatch(receiveCurrentUser(null)))
)
