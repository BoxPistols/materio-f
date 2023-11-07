// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import EditUserInfo from '@components/dialogs/edit-user-info'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import CustomAvatar from '@core/components/mui/Avatar'

// Style Imports
import styles from './styles.module.css'

const userData = {
  firstName: 'Seth',
  lastName: 'Hallam',
  userName: '@shallamb',
  billingEmail: 'shallamb@gmail.com',
  status: 'active',
  role: 'Subscriber',
  taxId: 'Tax-8894',
  contact: '+1 (234) 464-0600',
  language: ['English'],
  country: 'France',
  useAsBillingAddress: true
}

const UserDetails = () => {
  const buttonProps = (children: string, color: ThemeColor, variant: ButtonProps['variant']): ButtonProps => ({
    children,
    color,
    variant
  })

  return (
    <>
      <Card>
        <CardContent className='flex flex-col pbs-12 gap-6'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center justify-center flex-col gap-4'>
              <div className='flex flex-col items-center gap-4'>
                <Avatar
                  alt='user-profile'
                  src='/images/avatars/1.png'
                  variant='rounded'
                  className={styles.avatarImage}
                />
                <Typography variant='h6'>{`${userData.firstName} ${userData.lastName}`}</Typography>
              </div>
              <Chip label='Subscriber' color='error' size='small' variant='tonal' />
            </div>
            <div className='flex items-center justify-around'>
              <div className='flex items-center gap-4'>
                <CustomAvatar variant='rounded' skin='light'>
                  <i className={classnames('ri-check-line', styles.iconSize)} />
                </CustomAvatar>
                <div>
                  <Typography variant='h6'>1.23k</Typography>
                  <Typography variant='body2'>Task Done</Typography>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <CustomAvatar variant='rounded' skin='light'>
                  <i className={classnames('ri-star-line', styles.iconSize)} />
                </CustomAvatar>
                <div>
                  <Typography variant='h6'>568</Typography>
                  <Typography variant='body2'>Project Done</Typography>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Typography variant='h6'>Details</Typography>
            <Divider className='mlb-4' />
            <div className='flex flex-col gap-2'>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Username:</Typography>
                <Typography>{userData.userName}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Billing Email:</Typography>
                <Typography>{userData.billingEmail}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Status</Typography>
                <Typography>{userData.status}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Role:</Typography>
                <Typography>{userData.role}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Tax ID:</Typography>
                <Typography>{userData.taxId}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Contact:</Typography>
                <Typography>{userData.contact}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Language:</Typography>
                <Typography>{userData.language}</Typography>
              </div>
              <div className='flex items-center flex-wrap gap-x-1.5'>
                <Typography>Country:</Typography>
                <Typography>{userData.country}</Typography>
              </div>
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Edit', 'primary', 'contained')}
              dialog={EditUserInfo}
              dialogProps={{ data: userData }}
            />
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps('Suspend', 'error', 'outlined')}
              dialog={ConfirmationDialog}
              dialogProps={{ type: 'suspend-account' }}
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default UserDetails
