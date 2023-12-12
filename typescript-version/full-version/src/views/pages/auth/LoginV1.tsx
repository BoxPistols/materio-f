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
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Component Imports
import Logo from '@core/svg/Logo'
import Illustrations from '@components/Illustrations'

// Style Imports
import styles from './v1.module.css'
import commonStyles from '@/styles/common.module.css'

const LoginV1 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  // Hooks
  const isAboveSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  const { mode, systemMode } = useColorScheme()

  const authBackground =
    mode === 'dark' || systemMode === 'dark'
      ? '/images/pages/auth-v1-mask-dark.png'
      : '/images/pages/auth-v1-mask-light.png'

  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] relative p-6'>
      <Card className={classnames('flex flex-col', { [styles.card]: isAboveSmScreen })}>
        <CardContent className='!p-12'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className={commonStyles.primaryColor} height={28} width={35} />
            <Typography variant='h4' className='font-semibold tracking-[0.15px]'>
              {themeConfig.templateName}
            </Typography>
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography>
              <Typography className='mbs-1'>Please sign-in to your account and start the adventure</Typography>
            </div>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
              <TextField autoFocus fullWidth label='Email' />
              <TextField
                fullWidth
                label='Password'
                id='outlined-adornment-password'
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
              <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
                <FormControlLabel control={<Checkbox />} label='Remember me' />
                <Typography className='text-end' color='primary' component={Link} href='/pages/auth/forgot-password-v1'>
                  Forgot password?
                </Typography>
              </div>
              <Button fullWidth variant='contained' type='submit'>
                Log In
              </Button>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography>New on our platform?</Typography>
                <Typography component={Link} href='/pages/auth/register-v1' color='primary'>
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
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default LoginV1
