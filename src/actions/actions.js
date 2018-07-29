const API_KEY = 'OPEN_WEATHER_API_KEY';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = fetch(url).then(response => response.json());

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
