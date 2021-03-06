import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      let newObj = Object.assign({}, state);
      newObj.errors = errors;
      return newObj;
    default:
      return state;
  }
}

export default sessionReducer;
