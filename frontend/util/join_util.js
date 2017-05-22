export const joinEvent = (user_id, event_id) => (
  $.ajax({
    method: 'POST',
    url: '/api/joins',
    data: {join: {user_id, event_id}}
  })
);

export const leaveEvent = (joined_event_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/joins/${joined_event_id}`,
  })
);

export const fetchJoins = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/joins`,
  })
)
