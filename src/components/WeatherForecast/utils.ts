import { WeatherData } from 'components/List'
import get from 'lodash.get'
import { WeatherApiResponse } from 'utils/requests'

export const formatWeatherData = (weatherData: WeatherApiResponse): WeatherData => ({
  id: get(weatherData, 'id'),
  name: get(weatherData, 'name'),
  description: get(weatherData, 'weather[0].description'),
  iconCode: get(weatherData, 'weather[0].icon'),
  sunrise: get(weatherData, 'sys.sunrise'),
  sunset: get(weatherData, 'sys.sunset'),
  temp: get(weatherData, 'main.temp'),
})
