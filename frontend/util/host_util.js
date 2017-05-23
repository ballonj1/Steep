export const fetchHost = (host_id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${host_id}`
  })
)

export const createHost = (user_id, event_id) => (
  $.ajax({
    method: "POST",
    url: '/api/hosts',
    data: {host: {user_id, event_id}}
  })
)
