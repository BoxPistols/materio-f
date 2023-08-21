// React Imports
import React from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'

const BadgesAlignment = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Badge color='primary' variant='dot'>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
        <Avatar src='/assets/avatars/1.png' alt='User Avatar' />
      </Badge>
    </Box>
  )
}

export default BadgesAlignment