// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar1 from '../../../../docs/assets/images/avatars/1.png'

const BadgesAlignment = () => {
  return (
    <div className='flex gap-4'>
      <Badge color='primary' variant='dot'>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
        <Avatar src={avatar1} alt='User Avatar' />
      </Badge>
    </div>
  )
}

export default BadgesAlignment
