// MUI Imports
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import AvatarGroup from '@mui/material/AvatarGroup'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar4 from '../../../../docs/assets/images/avatars/4.png'
import avatar5 from '../../../../docs/assets/images/avatars/5.png'
import avatar6 from '../../../../docs/assets/images/avatars/6.png'
import avatar7 from '../../../../docs/assets/images/avatars/7.png'
import avatar8 from '../../../../docs/assets/images/avatars/8.png'

const AvatarsGroupedPullUpWithTooltip = () => {
  return (
    <AvatarGroup className='pull-up' max={4}>
      <Tooltip title='Olivia Sparks'>
        <Avatar src={avatar4} alt='Olivia Sparks' />
      </Tooltip>
      <Tooltip title='Howard Lloyd'>
        <Avatar src={avatar5} alt='Howard Lloyd' />
      </Tooltip>
      <Tooltip title='Hallie Richards'>
        <Avatar src={avatar6} alt='Hallie Richards' />
      </Tooltip>
      <Tooltip title='Alice Cobb'>
        <Avatar src={avatar8} alt='Alice Cobb' />
      </Tooltip>
      <Tooltip title='Jeffery Warner'>
        <Avatar src={avatar7} alt='Jeffery Warner' />
      </Tooltip>
    </AvatarGroup>
  )
}

export default AvatarsGroupedPullUpWithTooltip
