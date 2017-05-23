export const updateUser = (image_url, user_id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user_id}`,
    data: {user: {image_url}}
  })
)

export const updateUserCity = (city_name, city_id, user_id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user_id}`,
    data: {user: {city_id, city_name}}
  })
)
