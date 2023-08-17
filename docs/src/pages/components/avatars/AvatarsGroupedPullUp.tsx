// React Imports
import React from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const AvatarsGroupedPullUp = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Avatar src='/assets/avatars/4.png' alt='Olivia Sparks' />
      <Avatar src='/assets/avatars/5.png' alt='Howard Lloyd' />
      <Avatar src='/assets/avatars/6.png' alt='Hallie Richards' />
      <Avatar src='/assets/avatars/8.png' alt='Alice Cobb' />
      <Avatar src='/assets/avatars/7.png' alt='Jeffery Warner' />
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUp
