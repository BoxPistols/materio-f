// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar1 from '../../../../docs/assets/images/avatars/1.png'

const BadgesMaxValue = () => {
  return (
    <div className='flex gap-6'>
      <Badge badgeContent={99} color='primary'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={100} color='primary'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge badgeContent={1000} max={999} color='primary'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesMaxValue
