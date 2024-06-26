// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'

type StateType = {
  [key: string]: boolean
}

const CheckboxShowError = () => {
  // States
  const [state, setState] = useState<StateType>({
    gilad: true,
    jason: false,
    antoine: false
  })

  // Vars
  const { gilad, jason, antoine } = state
  const error = [gilad, jason, antoine].filter(v => v).length !== 2

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div className='flex flex-wrap'>
      <FormControl className='mbs-4 mie-4'>
        <FormLabel>Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            label='Gilad Gray'
            control={<Checkbox checked={gilad} onChange={handleChange} name='gilad' />}
          />
          <FormControlLabel
            label='Jason Killian'
            control={<Checkbox checked={jason} onChange={handleChange} name='jason' />}
          />
          <FormControlLabel
            label='Antoine Llorca'
            control={<Checkbox checked={antoine} onChange={handleChange} name='antoine' />}
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl required error={error} className='mbs-4'>
        <FormLabel>Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            label='Gilad Gray'
            control={<Checkbox checked={gilad} onChange={handleChange} name='gilad' />}
          />
          <FormControlLabel
            label='Jason Killian'
            control={<Checkbox checked={jason} onChange={handleChange} name='jason' />}
          />
          <FormControlLabel
            label='Antoine Llorca'
            control={<Checkbox checked={antoine} onChange={handleChange} name='antoine' />}
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </div>
  )
}

export default CheckboxShowError
