import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CityInput from 'components/CityInput'
import React, { useState } from 'react'
import { Wrapper } from './styled'

interface Props {
  onSubmit: (inputValue: string) => void
}

const ForecastForm = ({ onSubmit }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit(inputValue)
    setInputValue('')
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <CityInput value={inputValue} onChange={setInputValue} />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Wrapper>
  )
}

export default ForecastForm
