import * as APIUtil from '../util/host_util';

export const RECEIVE_HOST = 'RECEIVE_HOST';
export const RECEIVE_HOSTS = 'RECEIVE_HOSTS';

export const receiveHost = (host) => ({
  type: RECEIVE_HOST,
  host
});

export const receiveHosts = (hosts) => ({
  type: RECEIVE_HOSTS,
  hosts
})

export const fetchHosts = (user_id) => (dispatch) => (
  APIUtil.fetchHosts(user_id).then((hosts) => dispatch(receiveHosts(hosts)))
)

export const createHost = (user_id, event_id) => (dispatch) => (
  APIUtil.createHost(user_id, event_id).then((host) => dispatch(receiveHost((host))))
)
