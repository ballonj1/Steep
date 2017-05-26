export const joinEvent = (user_id, event_id) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${user_id}/joins`,
    data: {join: {user_id, event_id}}
  })
);

export const leaveEvent = (user_id, joined_event_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${user_id}/joins/${joined_event_id}`,
    data: {join: {user_id: `${user_id}`, event_id: `${joined_event_id}`}}
  })
);

export const fetchJoins = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/joins`
  })
)
