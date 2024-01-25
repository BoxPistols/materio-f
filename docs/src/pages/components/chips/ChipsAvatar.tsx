// MUI Imports
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

// Image Imports
import avatar6 from '../../../../docs/assets/images/avatars/6.png'

const ChipsAvatar = () => {
  return (
    <div className='flex gap-4 flex-wrap'>
      <Chip label='Default' avatar={<Avatar />} />
      <Chip label='Howard Paul' avatar={<Avatar src={avatar6} alt='User Avatar' />}  />
      <Chip label='Maurice Bell' avatar={<Avatar>M</Avatar>} />
      <Chip
        label='Archived'
        avatar={
          <Avatar>
            <i className='ri-archive-line' />
          </Avatar>
        }
      />
    </div>
  )
}

export default ChipsAvatar
