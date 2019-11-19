import Snackbar from '@material-ui/core/Snackbar'
import ForecastForm from 'components/ForecastForm'
import ResultsList from 'components/List'
import { formatWeatherData } from 'components/WeatherForecast/utils'
import React, { useState } from 'react'
import { requestWeatherData } from 'utils/requests'
import { FormWrapper, Wrapper } from './styled'

interface Props {}

const WeatherForecast = (props: Props) => {
  const [error, setError] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = async (searchString: string) => {
    try {
      const weatherData = await requestWeatherData(searchString)
      console.warn('Weather data', weatherData)
      setResults(current => [...current, formatWeatherData(weatherData)])
    } catch (e) {
      setError('Sorry, failed to fetch weather data')
    }
  }

  const handleCloseSnack = () => {
    setError('')
  }

  console.log('res', results)

  return (
    <Wrapper>
      <FormWrapper>
        <ForecastForm onSubmit={handleSubmit} />
      </FormWrapper>
      <ResultsList results={results} />
      <Snackbar open={!!error} autoHideDuration={4000} onClose={handleCloseSnack} message={error} />
    </Wrapper>
  )
}

export default WeatherForecast
