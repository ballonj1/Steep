import { RECEIVE_JOIN, REMOVE_JOIN, RECEIVE_JOINS } from '../actions/join_actions';
import merge from 'lodash/merge';

const joinReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_JOIN:
      const newJoin = merge([], state, [action.join]);
      return newJoin;
    case REMOVE_JOIN:
      const withoutJoin = merge([], state);
      const updatedJoins = withoutJoin.filter((join) => {
        return join.event_id !== action.join.event_id
      });
      return updatedJoins;
    case RECEIVE_JOINS:
      const newJoins = merge([], state, action.joins);
      return newJoins;
    default:
      return state;
  }
};

export default joinReducer;
