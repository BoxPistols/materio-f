// React Imports
import React from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ChipsIcon = () => {
  return (
    <div className='flex gap-4'>
      <Chip
        label='Previous'
        color='primary'
        icon={<Icon icon='mdi:arrow-left-thin-circle-outline' fontSize='1.25rem' />} 
      />
      <Chip
        label='Play/Pause'
        color='primary'
        variant='outlined'
        icon={<Icon icon='mdi:play-pause' fontSize='1.25rem' />}
      />
      <Chip
        label='Next'
        color='primary'
        variant='tonal'
        icon={<Icon icon='mdi:arrow-right-thin-circle-outline' fontSize='1.25rem' />}
      />
    </div>
  )
}

export default ChipsIcon
