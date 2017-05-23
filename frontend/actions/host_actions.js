import * as APIUtil from '../util/host_util';

export const RECEIVE_HOST = 'RECEIVE_HOST';

export const receiveHost = (host) => ({
  type: RECEIVE_HOST,
  host
});

export const fetchHost = (host_id) => (dispatch) => (
  APIUtil.fetchHost(host_id).then((host) => dispatch(receiveHost(host)))
)
