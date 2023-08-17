// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

const SelectVariants = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
      <FormControl fullWidth>
        <InputLabel id='demo-basic-select-outlined-label'>Age</InputLabel>
        <Select
          label='Age'
          defaultValue=''
          id='demo-basic-select-outlined'
          labelId='demo-basic-select-outlined-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='filled' fullWidth>
        <InputLabel id='demo-basic-select-filled-label'>Age</InputLabel>
        <Select label='Age' labelId='demo-basic-select-filled-label' id='demo-basic-select-filled' defaultValue=''>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='standard' fullWidth>
        <InputLabel id='demo-basic-select-label'>Age</InputLabel>
        <Select label='Age' labelId='demo-basic-select-label' id='demo-basic-select' defaultValue=''>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectVariants
