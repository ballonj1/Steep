import * as APIUtil from '../util/join_util';

export const RECEIVE_JOIN = 'RECEIVE_JOIN';
export const REMOVE_JOIN = 'REMOVE_JOIN';

export const receiveJoin = (join) => ({
  type: RECEIVE_JOIN,
  join
});

export const removeJoin = (join) => ({
  type: REMOVE_JOIN,
  join
});

export const joinEvent = (user_id, event_id) => (dispatch) => (
  APIUtil.joinEvent(user_id, event_id).then((join) => dispatch(receiveJoin(join)))
)

export const leaveEvent = (joined_event_id) => (dispatch) => (
  APIUtil.leaveEvent(joined_event_id).then((join) => dispatch(removeJoin(join)))
)
