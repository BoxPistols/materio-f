// React Imports
import React from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteLimitTags = () => {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      options={top100Films}
      id='autocomplete-limit-tags'
      getOptionLabel={option => option.title || ''}
      defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
      renderInput={params => <TextField {...params} label='limitTags' placeholder='Favorites' />}
    />
  )
}

export default AutocompleteLimitTags