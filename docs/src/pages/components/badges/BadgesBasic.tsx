// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar1 from '../../../../docs/assets/images/avatars/1.png'

const BadgesBasic = () => {
  return (
    <div className='flex gap-4'>
      <Badge badgeContent={4} color='primary'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='secondary'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='success'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='error'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='warning'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={4} color='info'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesBasic
