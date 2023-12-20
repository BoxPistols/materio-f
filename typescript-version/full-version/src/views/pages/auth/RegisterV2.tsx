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
import type { Theme } from '@mui/material/styles'
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Component Imports
import Logo from '@core/svg/Logo'
import Illustrations from '@components/Illustrations'

// Style Imports
import styles from './v2.module.css'
import commonStyles from '@/styles/common.module.css'

const RegisterV2 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
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
        ? '/images/illustrations/auth/v2-register-dark-border.png'
        : '/images/illustrations/auth/v2-register-light-border.png'
      : mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-register-dark.png'
        : '/images/illustrations/auth/v2-register-light.png'

  return (
    <div className='flex h-full justify-center'>
      <div className={'flex h-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden'}>
        <div className='plb-12 pis-12'>
          <img src={characterIllustration} alt='' className='max-bs-[500px] max-is-full bs-auto' />
        </div>
        <Illustrations
          image1={{ src: '/images/illustrations/objects/tree-3.png' }}
          image2={null}
          maskImg={{ src: authBackground }}
        />
      </div>
      <div
        className={classnames('flex justify-center items-center h-full', commonStyles.paperColor, {
          '!min-is-full p-6': isBelowMdScreen,
          [styles.rightWrapper]: isAboveMdScreen,
          'p-12': isAboveMdScreen
        })}
      >
        <div className='absolute block-start-[33px] !inline-start-6 sm:inline-start-[38px]'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className='text-primary' height={28} width={35} />
            <Typography variant='h4' className='font-semibold tracking-[0.15px]'>
              {themeConfig.templateName}
            </Typography>
          </div>
        </div>

        <div
          className={classnames('flex flex-col gap-5', {
            [styles.rightWrapperBelowMd]: isBelowMdScreen && !isBelowSmScreen,
            'is-[100%]': isAboveMdScreen || isBelowSmScreen
          })}
        >
          <div>
            <Typography variant='h4'>Adventure starts here 🚀</Typography>
            <Typography className='mbs-1'>Make your app management easy and fun!</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
            <TextField autoFocus fullWidth label='Username' />
            <TextField fullWidth label='Email' />
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
            <div className='flex justify-between items-center gap-3'>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Sign Up
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href='/pages/auth/login-v2' color='primary'>
                Sign in instead
              </Typography>
            </div>
            <Divider className='gap-3'>or</Divider>
            <div className='flex justify-center items-center gap-2'>
              <IconButton>
                <i className='ri-facebook-fill text-[#497ce2]' />
              </IconButton>
              <IconButton>
                <i className='ri-twitter-fill text-[#1da1f2]' />
              </IconButton>
              <IconButton>
                <i className='ri-github-fill text-[#272727]' />
              </IconButton>
              <IconButton>
                <i className='ri-google-line text-[#db4437]' />
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterV2
