// React Imports
import React from 'react'

// MUI Imports
import Avatar from '@mui/material/Avatar'

const AvatarsImage = () => {
  return (
    <div className='flex gap-4'>
      <Avatar src='/images/avatars/1.png' alt='Victor Anderson' />
      <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
      <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
    </div>
  )
}

export default AvatarsImage
