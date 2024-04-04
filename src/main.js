const weather = {
  weathersInCities: [],

  sortCitiesByTemperatureUp() {
    return this.weathersInCities.sort(
      (firstCity, secondCity) => firstCity.temperature - secondCity.temperature
    );
  },
  sortCitiesByTemperatureDown() {
    return this.weathersInCities.sort(
      (firstCity, secondCity) => secondCity.temperature - firstCity.temperature
    );
  },

  sortCityByWeatherType(type) {
    return this.weathersInCities.filter(
      (weather) => weather.weatherType === type
    );
  },
};

const addWeatherInCity = ({ cityName, temperature, weatherType }) => {
  weather.weathersInCities.push({ cityName, temperature, weatherType });
};

addWeatherInCity({
  cityName: "New-York",
  temperature: 12,
  weatherType: "cloudy",
});
addWeatherInCity({ cityName: "Berlin", temperature: 27, weatherType: "sunny" });
addWeatherInCity({
  cityName: "Amsterdam",
  temperature: -6,
  weatherType: "hoarfrost",
});

console.log(weather.sortCitiesByTemperatureDown());
console.log(weather.sortCityByWeatherType("sunny"));
