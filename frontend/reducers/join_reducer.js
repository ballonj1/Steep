import { RECEIVE_JOIN, REMOVE_JOIN, RECEIVE_JOINS } from '../actions/join_actions';
import _ from 'lodash';

const joinReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_JOIN:
      const newJoin = _.merge({}, state, {[action.join.id]: action.join});
      return _.values(newJoin);
    case REMOVE_JOIN:
      const withoutJoin = _.values(_.merge({}, state));
      const updatedJoins = withoutJoin.filter((join) => {
        return join.event_id !== action.join.event_id
      });
      return updatedJoins;
    case RECEIVE_JOINS:
      const newJoins = _.merge({}, state, action.joins);
      return _.values(newJoins);
    default:
      return _.values(state);
  }
};

export default joinReducer;
