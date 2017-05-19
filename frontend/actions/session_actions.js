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

export const signIn = (user) => (dispatch) => (
  APIUtil.signIn(user)
    .then((signedInUser) => dispatch(receiveCurrentUser(signedInUser)),
          (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const signUp = (user) => (dispatch) => (
  APIUtil.signUp(user)
    .then((signedUser) => dispatch(receiveCurrentUser(signedUser)),
          (errors) => dispatch(receiveErrors(errors.responseJSON)))
);

export const signOut = () => (dispatch) => (
  APIUtil.signOut()
    .then((signedOutUser) => dispatch(receiveCurrentUser(null)))
);
