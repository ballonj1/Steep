export const selectCity = (cities, match) => {
  const city = cities.filter((city) => {
    return city.id === parseInt(match.params.id);
  });
  return city || [{
    id: "",
    name: "",
    image_url: ""
  }];
}
