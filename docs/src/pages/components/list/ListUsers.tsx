// React Imports
import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import type { ListProps } from '@mui/material/List'

// Icon Imports
import Icon from '../../../components/iconify-icon'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-container': {
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius
    },
    '&:last-child': {
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(24)
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    }
  }
}))

type User = {
  name: string
  avatarSrc: string
  status: string
  statusColor: string
  lastActive: string
}

const userList: User[] = [
  {
    name: 'Caroline Black',
    avatarSrc: '/assets/avatars/2.png',
    status: 'Online',
    statusColor: 'success.main',
    lastActive: '13 minutes ago'
  },
  {
    name: 'Alfred Copeland',
    avatarSrc: '/assets/avatars/1.png',
    status: 'Away',
    statusColor: 'warning.main',
    lastActive: '11 minutes ago'
  },
  {
    name: 'Celia Schneider',
    avatarSrc: '/assets/avatars/8.png',
    status: 'Offline',
    statusColor: 'secondary.main',
    lastActive: '9 minutes ago'
  },
  {
    name: 'Max Rogan',
    avatarSrc: '/assets/avatars/5.png',
    status: 'In Meeting',
    statusColor: 'error.main',
    lastActive: '28 minutes ago'
  }
]


const ListUsers = () => {
  return (
    <StyledList disablePadding>
    {userList.map((user, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar src={user.avatarSrc} alt={user.name} />
          </ListItemAvatar>
          <div>
            <ListItemText primary={user.name} />
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: user.statusColor } }}>
                <Icon icon='mdi:circle' fontSize='0.625rem' />
                <Typography variant='caption'>{user.status}</Typography>
              </Box>
              <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                {user.lastActive}
              </Typography>
            </Box>
          </div>
          <ListItemSecondaryAction>
            <Button variant='contained' size='small'>
              Add
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </StyledList>
  )
}

export default ListUsers
