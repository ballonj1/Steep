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
