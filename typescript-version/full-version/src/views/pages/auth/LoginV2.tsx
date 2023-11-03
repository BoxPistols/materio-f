'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useColorScheme } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

// Component Imports
import Logo from '@core/svg/Logo'
import Illustrations from '@components/Illustrations'

// Style Imports
import styles from './v2.module.css'
import commonStyles from '@/styles/common.module.css'

const LoginV2 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const { settings } = useSettings()
  const { mode, systemMode } = useColorScheme()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const authBackground =
    mode === 'dark' || systemMode === 'dark'
      ? '/images/pages/auth-v2-mask-dark.png'
      : '/images/pages/auth-v2-mask-light.png'

  const characterIllustration =
    settings.skin === 'bordered'
      ? mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-login-dark-border.png'
        : '/images/illustrations/auth/v2-login-light-border.png'
      : mode === 'dark' || systemMode === 'dark'
      ? '/images/illustrations/auth/v2-login-dark.png'
      : '/images/illustrations/auth/v2-login-light.png'

  return (
    <div className='flex h-full justify-center'>
      {isAboveMdScreen && (
        <div className={'flex h-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6'}>
          <div className='plb-12 pis-12'>
            <img src={characterIllustration} alt='' className={styles.illustrationSize} />
          </div>
          <Illustrations
            image1={{ src: '/images/illustrations/objects/tree-2.png' }}
            image2={null}
            maskImg={{ src: authBackground }}
          />
        </div>
      )}
      <div
        className={classnames('flex justify-center items-center h-full', commonStyles.paperColor, {
          '!min-is-full p-6': isBelowMdScreen,
          [styles.rightWrapper]: isAboveMdScreen,
          'p-12': isAboveMdScreen
        })}
      >
        <div className={classnames('absolute', styles.templateName)}>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className={commonStyles.primaryColor} height={28} width={35} />
            <Typography variant='h5' className='font-semibold'>
              {themeConfig.templateName}
            </Typography>
          </div>
        </div>
        <div className={classnames('flex flex-col gap-5', { [styles.rightWrapperBelowMd]: isBelowMdScreen })}>
          <div>
            <Typography variant='h5' className='font-semibold mbe-1'>
              Welcome to Master! 👋🏻
            </Typography>
            <Typography variant='body2'>Please sign-in to your account and start the adventure</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
            <TextField autoFocus fullWidth label='Email' />
            <TextField
              fullWidth
              label='Password'
              type={isPasswordShown ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                      <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
              <FormControlLabel control={<Checkbox />} label='Remember me' />
              <Typography
                variant='body2'
                className={classnames('text-end', commonStyles.primaryColor)}
                component={Link}
                href='/pages/auth/forgot-password-v2'
              >
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Log In
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography className={commonStyles.textSecondary}>New on our platform?</Typography>
              <Typography component={Link} href='/pages/auth/register-v2' className={commonStyles.primaryColor}>
                Create an account
              </Typography>
            </div>
            <Divider className='gap-3'>or</Divider>
            <div className='flex justify-center items-center gap-2'>
              <IconButton>
                <i className={classnames('ri-facebook-fill', commonStyles.facebookColor)} />
              </IconButton>
              <IconButton>
                <i className={classnames('ri-twitter-fill', commonStyles.twitterColor)} />
              </IconButton>
              <IconButton>
                <i className={classnames('ri-github-fill', commonStyles.githubColor)} />
              </IconButton>
              <IconButton>
                <i className={classnames('ri-google-line', commonStyles.googleColor)} />
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginV2
