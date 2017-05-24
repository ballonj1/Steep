export const getByCity = (city, events) => {
  const cityEvents = events.filter((event) => {
    return event.city_id === city[0].id
  });
  return cityEvents
}
