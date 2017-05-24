import { RECEIVE_HOST, RECEIVE_HOSTS } from '../actions/host_actions';
import _ from 'lodash';

const hostReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_HOSTS:
      return _.values(action.hosts)
    case RECEIVE_HOST:
      const newHosts = _.merge({}, state, {[action.host.id]: action.host})
      return _.values(newHosts);
    default:
      return state;
  }
}

export default hostReducer;
