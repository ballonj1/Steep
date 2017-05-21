export const fetchEvents = (city_id) => (
  $.ajax({
    method: "GET",
    url: `/api/cities/${city_id}/events`
  })
) 
