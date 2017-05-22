import { RECEIVE_JOIN, REMOVE_JOIN } from '../actions/join_actions';
import merge from 'lodash/merge';

const joinReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_JOIN:
      const newJoins = merge([], state, action.join);
      return newJoins;
    case REMOVE_JOIN:
      const withoutJoin = merge([], state);
      const updatedJoins = withoutJoin.filter((join) => {
        return join.event_id !== action.join.event_id
      });
      return updatedJoins;
    default:
      return state;
  }
};

export default joinReducer;
