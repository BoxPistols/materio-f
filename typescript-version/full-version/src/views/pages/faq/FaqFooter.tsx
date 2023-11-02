// MUI Imports
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

const FaqFooter = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col text-center mlb-6 gap-2'>
        <Chip label='Question' size='small' color='primary' variant='tonal' />
        <Typography variant='h5'>You still have a question?</Typography>
        <Typography variant='body2'>
          If you cannot find a question in our FAQ, you can always contact us. We will answer you shortly!
        </Typography>
      </div>
      <Grid container spacing={6} className='mbs-6'>
        <Grid item xs={12} md={6}>
          <div
            className={classnames(
              'flex justify-center items-center flex-col gap-4 p-6',
              commonStyles.actionHoverBackground,
              commonStyles.borderRadius
            )}
          >
            <CustomAvatar variant='rounded' skin='light' className={styles.avatarSize}>
              <i className='ri-phone-line text-3xl' />
            </CustomAvatar>
            <div className='flex items-center flex-col gap-1'>
              <Typography variant='h6'>+ (810) 2548 2568</Typography>
              <Typography className={commonStyles.textSecondary}>We are always happy to help!</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            className={classnames(
              'flex justify-center items-center flex-col gap-4 p-6',
              commonStyles.actionHoverBackground,
              commonStyles.borderRadius
            )}
          >
            <CustomAvatar variant='rounded' skin='light' className={classnames(styles.avatarSize)}>
              <i className='ri-mail-line text-3xl' />
            </CustomAvatar>
            <div className='flex items-center flex-col gap-1'>
              <Typography variant='h6'>hello@help.com</Typography>
              <Typography className={commonStyles.textSecondary}>Best way to get answer faster!</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default FaqFooter
