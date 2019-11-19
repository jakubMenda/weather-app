import TextField from '@material-ui/core/TextField'
import React from 'react'

interface Props {
  value: string
  onChange: (val: string) => void
}

const CityInput = ({ value, onChange }: Props) => {
  return <TextField value={value} onChange={e => onChange(e.target.value)} fullWidth placeholder="Enter a city" />
}

export default CityInput
