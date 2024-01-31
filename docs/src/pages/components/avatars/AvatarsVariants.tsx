// React Imports
import React from 'react'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const AvatarsVariants = () => {
  return (
    <div className='flex gap-4'>
      <CustomAvatar color='primary' variant='square'>
        <i className='ri-notification-4-line' />
      </CustomAvatar>
      <CustomAvatar color='success' variant='rounded'>
        <i className='ri-save-2-line' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='primary' variant='square'>
        <i className='ri-notification-4-line' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='success' variant='rounded'>
        <i className='ri-save-2-line' />
      </CustomAvatar>
    </div>
  )
}

export default AvatarsVariants
