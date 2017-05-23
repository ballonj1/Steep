export const fetchHost = (host_id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${host_id}`
  })
)
