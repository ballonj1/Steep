import * as APIUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const updateUser = (image_url, user_id) => (dispatch) => (
  APIUtil.updateUser(image_url, user_id).then((user) => dispatch(receiveUser(user)))
)
