// React Imports
import { useState } from 'react'

// MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// Image Imports
import avatar1 from '../../../../docs/assets/images/avatars/1.png'
import avatar2 from '../../../../docs/assets/images/avatars/2.png'
import avatar8 from '../../../../docs/assets/images/avatars/8.png'

const ListItemSelected = () => {
  // States
  const [selectedIndex, setSelectedIndex] = useState<number>(1)

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <List>
      <ListItem disablePadding secondaryAction={
        <IconButton edge='end' onClick={e => e.stopPropagation()}>
         <i className='ri-message-2-line text-xl' />
        </IconButton>
      }>
        <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0)}>
          <ListItemAvatar>
            <Avatar src={avatar2} alt='Caroline Black' />
          </ListItemAvatar>
          <ListItemText primary='Caroline Black' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding secondaryAction={
        <IconButton edge='end' onClick={e => e.stopPropagation()}>
          <i className='ri-message-2-line text-xl'/>
        </IconButton>
      }>
        <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1)}>
          <ListItemAvatar>
            <Avatar src={avatar1} alt='Alfred Copeland' />
          </ListItemAvatar>
          <ListItemText primary='Alfred Copeland' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding secondaryAction={
        <IconButton edge='end' onClick={e => e.stopPropagation()}>
         <i className='ri-message-2-line text-xl'/>
        </IconButton>
      }>
        <ListItemButton selected={selectedIndex === 2} onClick={() => handleListItemClick(2)}>
          <ListItemAvatar>
            <Avatar src={avatar8} alt='Celia Schneider' />
          </ListItemAvatar>
          <ListItemText primary='Celia Schneider' />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default ListItemSelected
