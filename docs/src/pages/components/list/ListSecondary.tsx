// MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar1 from '../../../../docs/assets/images/avatars/1.png'
import avatar2 from '../../../../docs/assets/images/avatars/2.png'
import avatar8 from '../../../../docs/assets/images/avatars/8.png'

const ListSecondary = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatar2} alt='Caroline Black' />
        </ListItemAvatar>
        <ListItemText primary='Caroline Black' secondary='Sweet dessert brownie.' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <i className='ri-add-line' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatar1} alt='Alfred Copeland' />
        </ListItemAvatar>
        <ListItemText primary='Alfred Copeland' secondary='Pudding pie tiramisu.' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <i className='ri-add-line' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatar8} alt='Celia Schneider' />
        </ListItemAvatar>
        <ListItemText primary='Celia Schneider' secondary='Muffin pie chupa chups.' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <i className='ri-add-line' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default ListSecondary
