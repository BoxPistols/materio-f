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
              <Typography component='sup' className={classnames('self-end', commonStyles.primaryColor)} variant='h6'>
                $
              </Typography>
              <Typography component='span' variant='h3' className={commonStyles.primaryColor}>
                99
              </Typography>
              <Typography component='sub' className={classnames('self-end', commonStyles.textPrimary)} variant='body2'>
                /month
              </Typography>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.textSecondary)} />
              <Typography component='span' variant='body2'>
                10 Users
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.textSecondary)} />
              <Typography component='span' variant='body2'>
                Up to 10 GB storage
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <i className={classnames('ri-circle-fill text-[10px]', commonStyles.textSecondary)} />
              <Typography component='span' variant='body2'>
                Basic Support
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <Typography variant='body2' className={classnames('font-medium', commonStyles.textPrimary)}>
                Days
              </Typography>
              <Typography variant='body2' className={classnames('font-medium', commonStyles.textPrimary)}>
                65%
              </Typography>
            </div>
            <LinearProgress variant='determinate' value={65} />
            <Typography variant='caption'>4 days remaining</Typography>
          </div>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={UpgradePlan} />
        </CardContent>
      </Card>
    </>
  )
}

export default UserPlan
