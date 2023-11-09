'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'
import globalDialogStyles from '@components/dialogs/styles.module.css'

type ReferEarnProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

type Options = {
  icon?: ReactNode
  title?: string
  subtitle?: string
}

const options: Options[] = [
  {
    icon: 'ri-send-plane-2-line',
    title: 'Send Invitation 👍🏻',
    subtitle: 'Send your referral link to your friend'
  },
  {
    icon: 'ri-clipboard-line',
    title: 'Registration 😎',
    subtitle: 'Let them register to our services'
  },
  {
    icon: 'ri-gift-line',
    title: 'Free Trial  🎉',
    subtitle: 'Your friend will get 30 days free trial'
  }
]

const ReferEarn = ({ open, setOpen }: ReferEarnProps) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)} maxWidth='md' scroll='body'>
      <DialogTitle
        variant='h5'
        className={classnames('flex gap-2 flex-col text-center', globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Refer & Earn
        <Typography component='span' variant='body2' className='flex flex-col text-center'>
          Invite your friend to {themeConfig.templateName}, if they sign up, you and your friend will get 30 days free
          trial
        </Typography>
      </DialogTitle>
      <DialogContent
        className={classnames('flex flex-col gap-6', globalDialogStyles.dialogContentWithActions, {
          [globalDialogStyles.smDialogContentWithActions]: isBelowSmScreen
        })}
      >
        <IconButton onClick={() => setOpen(false)} className={styles.closeIcon}>
          <i className='ri-close-line' />
        </IconButton>
        <Grid container spacing={6} className='pbs-6'>
          {options?.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div className='flex items-center flex-col gap-4'>
                <CustomAvatar size={isBelowSmScreen ? 66 : 88} skin='light'>
                  {typeof option.icon === 'string' ? (
                    <i
                      className={classnames(option.icon, {
                        'text-[32px]': isBelowSmScreen,
                        'text-[40px]': !isBelowSmScreen
                      })}
                    />
                  ) : (
                    option.icon
                  )}
                </CustomAvatar>
                <div className='flex flex-col gap-2 text-center'>
                  <Typography className='font-medium'>{option.title}</Typography>
                  <Typography variant='body2'>{option.subtitle}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Divider className='mlb-6' />
        <div className='flex flex-col gap-5'>
          <Typography variant='h6'>Invite your friends</Typography>
          <div className='inline-flex flex-col gap-2 flex-wrap items-start'>
            <Typography
              component={InputLabel}
              variant='body2'
              htmlFor='refer-email'
              className='inline-flex whitespace-break-spaces'
            >
              Enter your friend&#39;s email address and invite them to join {themeConfig.templateName} 😍
            </Typography>
            <div className={classnames('flex items-center w-full gap-4', { 'flex-wrap': isBelowSmScreen })}>
              <TextField fullWidth size='small' id='refer-email' placeholder='johnDoe@email.com' />
              <Button variant='contained' className={classnames({ 'w-full': isBelowSmScreen })}>
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <Typography variant='h6'>Share the referral link</Typography>
          <div className='inline-flex flex-col gap-2 items-start'>
            <Typography
              component={InputLabel}
              variant='body2'
              htmlFor='refer-social'
              className='inline-flex whitespace-break-spaces'
            >
              You can also copy and send it or share it on your social media. 🚀
            </Typography>
            <div
              className={classnames('flex items-center justify-initial w-full gap-4', {
                'flex-wrap justify-end': isBelowSmScreen
              })}
            >
              <OutlinedInput
                fullWidth
                size='small'
                id='refer-social'
                className='pie-1'
                placeholder='http://referral.link'
                endAdornment={
                  <InputAdornment position='end'>
                    <Button size='small' className='uppercase'>
                      Copy Link
                    </Button>
                  </InputAdornment>
                }
              />
              <div className='flex items-center gap-1'>
                <Button className={classnames('p-2 min-w-0', styles.facebookIcon, commonStyles.borderRadius)}>
                  <i className='ri-facebook-circle-fill' />
                </Button>
                <Button className={classnames('p-2 min-w-0', styles.twitterIcon, commonStyles.borderRadius)}>
                  <i className='ri-twitter-fill' />
                </Button>
                <Button className={classnames('p-2 min-w-0', styles.linkedinIcon, commonStyles.borderRadius)}>
                  <i className='ri-linkedin-box-fill' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReferEarn
