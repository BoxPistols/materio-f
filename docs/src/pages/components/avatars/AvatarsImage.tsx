// MUI Imports
import Avatar from '@mui/material/Avatar'

// Image Imports
import avatar1 from '../../../../docs/assets/images/avatars/1.png'
import avatar7 from '../../../../docs/assets/images/avatars/7.png'
import avatar8 from '../../../../docs/assets/images/avatars/8.png'

const AvatarsImage = () => {
  return (
    <div className='flex gap-4'>
      <Avatar src={avatar1} alt='Victor Anderson' />
      <Avatar src={avatar8} alt='Alice Cobb' />
      <Avatar src={avatar7} alt='Jeffery Warner' />
    </div>
  )
}

export default AvatarsImage
