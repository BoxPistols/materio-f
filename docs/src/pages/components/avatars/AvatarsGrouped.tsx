// MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar4 from '../../../../docs/assets/images/avatars/4.png'
import avatar5 from '../../../../docs/assets/images/avatars/5.png'
import avatar6 from '../../../../docs/assets/images/avatars/6.png'
import avatar7 from '../../../../docs/assets/images/avatars/7.png'
import avatar8 from '../../../../docs/assets/images/avatars/8.png'

const AvatarsGrouped = () => {
  return (
    <div className='flex flex-col gap-4'>
      <AvatarGroup max={4}>
        <Avatar src={avatar4} alt='Olivia Sparks' />
        <Avatar src={avatar5} alt='Howard Lloyd' />
        <Avatar src={avatar6} alt='Hallie Richards' />
        <Avatar src={avatar8} alt='Alice Cobb' />
        <Avatar src={avatar7} alt='Jeffery Warner' />
      </AvatarGroup>
      <AvatarGroup max={4} className='justify-center'>
        <Avatar src={avatar4} alt='Olivia Sparks' />
        <Avatar src={avatar5} alt='Howard Lloyd' />
        <Avatar src={avatar6} alt='Hallie Richards' />
        <Avatar src={avatar8} alt='Alice Cobb' />
        <Avatar src={avatar7} alt='Jeffery Warner' />
      </AvatarGroup>
      <AvatarGroup max={4} className='justify-start'>
        <Avatar src={avatar4} alt='Olivia Sparks' />
        <Avatar src={avatar5} alt='Howard Lloyd' />
        <Avatar src={avatar6} alt='Hallie Richards' />
        <Avatar src={avatar8} alt='Alice Cobb' />
        <Avatar src={avatar7} alt='Jeffery Warner' />
      </AvatarGroup>
    </div>
  )
}

export default AvatarsGrouped
