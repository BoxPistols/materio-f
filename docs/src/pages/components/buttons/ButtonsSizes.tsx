// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ButtonsSizes = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button variant='text' size='small'>
          Small
        </Button>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='large'>
          Large
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <IconButton aria-label='capture screenshot' color='secondary' size='small'>
          <Icon icon='mdi:camera-iris' fontSize='inherit' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <Icon icon='mdi:camera-iris' fontSize='1.25rem' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <Icon icon='mdi:camera-iris' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary' size='large'>
          <Icon icon='mdi:camera-iris' fontSize='2.1875rem' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default ButtonsSizes
