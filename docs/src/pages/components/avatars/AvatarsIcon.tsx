// MUI Imports
import Avatar from '@mui/material/Avatar'

// Component Imports
import CustomAvatar from '@docComponents/mui/Avatar'

const AvatarsIcon = () => {
  return (
    <div className="flex gap-4">
      <Avatar>
        <i className='ri-folder-2-line' />
      </Avatar>
      <CustomAvatar color='success'>
        <i className='ri-refresh-line' />
      </CustomAvatar>
      <CustomAvatar skin='light' color='info'>
        <i className='ri-checkbox-circle-line' />
      </CustomAvatar>
    </div>
  )
}

export default AvatarsIcon
