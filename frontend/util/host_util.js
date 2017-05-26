export const fetchHosts = (user_id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/hosts`
  })
)

export const createHost = (user_id, event_id) => (
  $.ajax({
    method: "POST",
    url: '/api/hosts',
    data: {host: {user_id, event_id}}
  })
)

export const destroyHost = (host_id, user_id, event_id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/hosts/${host_id}`,
    data: {host: {user_id, event_id}}
  })
)
