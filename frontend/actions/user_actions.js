import * as APIUtil from '../util/user_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const updateUser = (image_url, user_id) => (dispatch) => (
  APIUtil.updateUser(image_url, user_id).then((user) => dispatch(receiveCurrentUser(user)))
)

export const updateUserCity = (city_name, city_id, user_id) => (dispatch) => {
  APIUtil.updateUserCity(city_name, city_id, user_id).then((user) => dispatch(receiveCurrentUser(user)))
}
