import DownIcon from '@material-ui/icons/ArrowDropDown'
import UpIcon from '@material-ui/icons/ArrowDropUp'
import { resolveIcon } from 'components/List/utils'
import moment from 'moment'
import React from 'react'
import { Cell, CityName, Description, Image, ListItem, SmallSpan, Sun, SunIcons } from './styled'

export interface WeatherData {
  id: number
  name: string
  iconCode: string
  description: string
  temp: number
  sunrise: number
  sunset: number
}

interface Props {
  results: WeatherData[]
}

const ResultsList = ({ results = [] }: Props) => {
  return (
    <>
      {results.map(({ id, name, description, iconCode, sunrise, sunset, temp }) => {
        const sunriseFormatted = moment.unix(sunrise).format('HH:mm')
        const sunsetFormatted = moment.unix(sunset).format('HH:mm')
        const icon = resolveIcon(iconCode)
        const temperature = `${Math.round(temp)} °C`

        return (
          <ListItem key={id}>
            {icon && <Image src={icon} alt={description} />}
            <Cell>
              <CityName>{name}</CityName>
              <Description>{description}</Description>
            </Cell>
            <Cell>{temperature}</Cell>
            <Cell>
              <SunIcons>
                <SmallSpan>{sunriseFormatted}</SmallSpan>
                <UpIcon />
                <Sun />
                <DownIcon />
                <SmallSpan>{sunsetFormatted}</SmallSpan>
              </SunIcons>
            </Cell>
          </ListItem>
        )
      })}
    </>
  )
}

export default ResultsList
