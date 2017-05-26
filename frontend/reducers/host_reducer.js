import { RECEIVE_HOST, RECEIVE_HOSTS, REMOVE_HOST } from '../actions/host_actions';
import _ from 'lodash';

const hostReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_HOSTS:
      return _.values(action.hosts)
    case RECEIVE_HOST:
      const newHosts = _.merge({}, state, {[action.host.id]: action.host})
      return _.values(newHosts);
    case REMOVE_HOST:
      const beforeRemove = _.values(_.merge({}, state));
      const withoutHost = beforeRemove.filter((host) => {
        return host.id !== action.host.id
      });
      return withoutHost;
    default:
      return _.values(state);
  }
}

export default hostReducer;
