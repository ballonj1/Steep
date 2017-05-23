export const updateUser = (image_url, user_id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user_id}`,
    data: {user: {image_url}}
  })
)
