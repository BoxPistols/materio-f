// React Imports
import React from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const ChipsOnDelete = () => {
  const handleDelete = () => {
    // eslint-disable-next-line no-console
    console.info('You clicked the delete icon.')
  }

  return (
    <div className='flex gap-4 flex-col'>
      <Typography className='font-medium'>Default close with Outlined Variant</Typography>
      <div className='flex gap-4'>
        <Chip label='Basic' variant='outlined' onDelete={handleDelete} />
        <Chip label='Primary' color='primary' variant='outlined' onDelete={handleDelete} />
        <Chip label='Secondary' color='secondary' variant='outlined' onDelete={handleDelete} />
      </div>
      <Typography className='font-medium'>Custom close with Filled Variant</Typography>
      <div className='flex gap-4'>
        <Chip label='Basic' onDelete={handleDelete} deleteIcon={<Icon icon='mdi:delete-outline' />} />
        <Chip label='Primary' color='primary' onDelete={handleDelete} deleteIcon={<Icon icon='mdi:delete-outline' />} />
        <Chip
          label='Secondary'
          color='secondary'
          onDelete={handleDelete}
          deleteIcon={<Icon icon='mdi:delete-outline' />}
        />
      </div>
      <Typography className='font-medium'>Custom close with Tonal Variant</Typography>
      <div className='flex gap-4'>
        <Chip
          label='Default'
          variant='tonal'
          onDelete={handleDelete}
          deleteIcon={<Icon icon='mdi:delete-empty-outline' />}
        />
        <Chip
          label='Primary'
          color='primary'
          variant='tonal'
          onDelete={handleDelete}
          deleteIcon={<Icon icon='mdi:delete-empty-outline' />}
        />
        <Chip
          label='Secondary'
          color='secondary'
          variant='tonal' onDelete={handleDelete}
          deleteIcon={<Icon icon='mdi:delete-empty-outline' />}
        />
      </div>
    </div>
  )
}

export default ChipsOnDelete
