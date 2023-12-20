// MUI Imports
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// Third-party Imports
import { toast } from 'react-toastify'
import classnames from 'classnames'

// Styles Imports
import commonStyles from '@/styles/common.module.css'

const ToastsCustom = () => {
  const handleClick = () => {
    return toast(
      t => (
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center'>
            <Avatar alt='Victor Anderson' src='/images/avatars/3.png' className='mie-3'/>
            <div>
              <Typography variant='h6'>John Doe</Typography>
              <Typography variant='caption'>Sure! 8:30pm works great!</Typography>
            </div>
          </div>
          <IconButton onClick={() => toast.dismiss(t.toastProps.toastId)} size='small'>
            <i className={classnames('ri-close-line text-xl', commonStyles.textPrimary)} />
          </IconButton>
        </div>
      ),
      {
        style: {
          minWidth: '300px'
        },
        closeButton: false,
      }
    )
  }

  return (
    <div className='flex text-center flex-col items-center'
    >
      <i className='ri-pencil-line mbe-2 text-[28px]' />
      <Typography className='mbe-4' variant='h5'>Custom</Typography>
      <Typography className='mbe-3'>Make a toast using any custom content</Typography>
      <Button className='mbe-8' variant='contained' onClick={handleClick}>
        Custom
      </Button>
    </div>
  )
}

export default ToastsCustom
