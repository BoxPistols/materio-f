// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import UpgradePlan from '@components/dialogs/upgrade-plan'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

const UserPlan = () => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Upgrade Plan'
  }

  return (
    <>
      <Card className={classnames(styles.cardBorder, commonStyles.borderRadius)}>
        <CardContent className='flex flex-col gap-6'>
          <div className='flex justify-between'>
            <Chip label='standard' size='small' color='primary' variant='tonal' />
            <div className='flex justify-center'>
              <Typography variant='h5' component='sup' className='self-start' color='primary'>
                $
              </Typography>
              <Typography component='span' variant='h1' color='primary'>
                99
              </Typography>
              <Typography component='sub' className='self-end' color='text.primaryColor'>
                /month
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.textSecondary)} />
              <Typography component='span'>10 Users</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.textSecondary)} />
              <Typography component='span'>Up to 10 GB storage</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.textSecondary)} />
              <Typography component='span'>Basic Support</Typography>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <Typography className='font-medium'>Days</Typography>
              <Typography className='font-medium'>65%</Typography>
            </div>
            <LinearProgress variant='determinate' value={65} />
            <Typography variant='body2'>4 days remaining</Typography>
          </div>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={UpgradePlan} />
        </CardContent>
      </Card>
    </>
  )
}

export default UserPlan
