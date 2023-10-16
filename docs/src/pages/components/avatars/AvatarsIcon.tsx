// React Imports
import React from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'

// Component Imports
import CustomAvatar from '@docComponents/mui/Avatar'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const AvatarsIcon = () => {
  return (
    <div className="flex gap-4">
      <Avatar>
        <Icon icon='mdi:folder-outline' />
      </Avatar>
      <CustomAvatar color='success'>
        <Icon icon='mdi:cached' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='info'>
        <Icon icon='mdi:checkbox-marked-circle-outline' />
      </CustomAvatar>
    </div>
  )
}

export default AvatarsIcon
