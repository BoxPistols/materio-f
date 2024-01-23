// MUI Imports
import Avatar from '@mui/material/Avatar'

// Component Imports
import CustomAvatar from '@docComponents/mui/Avatar'

const AvatarsSizes = () => {
  return (
    <div className='flex items-center gap-4'>
      <CustomAvatar size={24} alt='Victor Anderson' src='/images/avatars/3.png' />
      <Avatar alt='Victor Anderson' src='/images/avatars/3.png' />
      <CustomAvatar size={56} alt='Victor Anderson' src='/images/avatars/3.png' />
    </div>
  )
}

export default AvatarsSizes
