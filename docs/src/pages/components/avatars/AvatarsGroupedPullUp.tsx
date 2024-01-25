// MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

// Image Imports
import avatar4 from '../../../../docs/assets/images/avatars/4.png'
import avatar5 from '../../../../docs/assets/images/avatars/5.png'
import avatar6 from '../../../../docs/assets/images/avatars/6.png'
import avatar7 from '../../../../docs/assets/images/avatars/7.png'
import avatar8 from '../../../../docs/assets/images/avatars/8.png'

const AvatarsGroupedPullUp = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Avatar src={avatar4} alt='Olivia Sparks' />
      <Avatar src={avatar5} alt='Howard Lloyd' />
      <Avatar src={avatar6} alt='Hallie Richards' />
      <Avatar src={avatar8} alt='Alice Cobb' />
      <Avatar src={avatar7} alt='Jeffery Warner' />
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUp
