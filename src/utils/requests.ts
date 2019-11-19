import axios from 'axios'

interface Clouds {
  all: number
}

interface Coord {
  lon: number
  lat: number
}

interface Main {
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

interface Sys {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

interface Weather {
  id: number
  description: string
  icon: string
  main: string
}

interface Wind {
  speed: number
  deg: number
}

export interface WeatherApiResponse {
  base: string
  clouds: Clouds
  cod: number
  coord: Coord
  dt: number
  id: number
  main: Main
  name: string
  rain: object
  sys: Sys
  timezone: number
  visibility: number
  weather: Weather[]
  wind: Wind
}

export const requestWeatherData = async (city: string): Promise<WeatherApiResponse> => {
  return await axios
    .get(`${process.env.WEATHER_API_URL}/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.WEATHER_API_KEY}`)
    .then(({ data }) => data)
}
