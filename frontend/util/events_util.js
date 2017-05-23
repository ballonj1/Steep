export const fetchEvents = (city_id) => (
  $.ajax({
    method: "GET",
    url: `/api/cities/${city_id}/events`
  })
)

export const updateEvent = (event_id, current_attend) => (
  $.ajax({
    method: "PATCH",
    url: `/api/events/${event_id}`,
    data: {event: {current_attend}}
  })
)
