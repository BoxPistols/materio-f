'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Illustrations from '@components/Illustrations'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Component Imports
import Logo from '@core/svg/Logo'

// Style Imports
import styles from './v1.module.css'
import commonStyles from '@/styles/common.module.css'

const ResetPasswordV1 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleClickShowConfirmPassword = () => setIsConfirmPasswordShown(show => !show)

  const { mode, systemMode } = useColorScheme()

  const authBackground =
    mode === 'dark' || systemMode === 'dark'
      ? '/images/pages/auth-v1-mask-dark.png'
      : '/images/pages/auth-v1-mask-light.png'

  // Hooks
  const isAboveSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className={classnames('flex flex-col', { [styles.card]: isAboveSmScreen })}>
        <CardContent className='!p-12'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className={classnames('h-8', commonStyles.primaryColor)} height={28} width={35} />
            <Typography variant='h5' className='font-semibold'>
              {themeConfig.templateName}
            </Typography>
          </div>
          <Typography variant='h5' className='font-semibold'>
            Reset Password 🔒
          </Typography>
          <div className='flex flex-col gap-5'>
            <Typography variant='body2' className='mbs-1'>
              Your new password must be different from previously used passwords
            </Typography>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
              <TextField
                autoFocus
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
              <TextField
                fullWidth
                label='Confirm Password'
                type={isConfirmPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isConfirmPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button fullWidth variant='contained' type='submit'>
                Set New Password
              </Button>
              <Typography className={classnames('flex justify-center items-center', commonStyles.primaryColor)}>
                <Link href='/pages/auth/login-v1' onClick={e => e.preventDefault()} className='flex items-center'>
                  <i className='ri-arrow-left-s-line' />
                  <span>Back to Login</span>
                </Link>
              </Typography>
            </form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default ResetPasswordV1
