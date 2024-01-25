// MUI Imports
import Avatar from '@mui/material/Avatar'

// Component Imports
import CustomAvatar from '@docComponents/mui/Avatar'

// Image Imports
import avatar3 from '../../../../docs/assets/images/avatars/3.png'

const AvatarsSizes = () => {
  return (
    <div className='flex items-center gap-4'>
      <CustomAvatar size={24} alt='Victor Anderson' src={avatar3} />
      <Avatar alt='Victor Anderson' src={avatar3} />
      <CustomAvatar size={56} alt='Victor Anderson' src={avatar3} />
    </div>
  )
}

export default AvatarsSizes
