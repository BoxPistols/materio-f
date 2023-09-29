// React Imports
import React from 'react'

// Component Imports
import CustomAvatar from '@docComponents/mui/Avatar'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const AvatarsVariants = () => {
  return (
    <div className='flex gap-4'>
      <CustomAvatar variant='square'>
        <Icon icon='mdi:bell-outline' />
      </CustomAvatar>
      <CustomAvatar color='success' variant='rounded'>
        <Icon icon='mdi:content-save-outline' />
      </CustomAvatar>
      <CustomAvatar skin='light' variant='square'>
        <Icon icon='mdi:bell-outline' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='success' variant='rounded'>
        <Icon icon='mdi:content-save-outline' />
      </CustomAvatar>
    </div>
  )
}

export default AvatarsVariants
