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

// Component Imports
import Illustrations from '@components/Illustrations'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Component Imports
import Logo from '@core/svg/Logo'

// Style Imports
import styles from './v1.module.css'
import commonStyles from '@/styles/common.module.css'

const RegisterV1 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  // Hooks
  const { mode, systemMode } = useColorScheme()
  const isAboveSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

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
            <Typography variant='h5' className='font-semibold'>
              {themeConfig.templateName}
            </Typography>
          </div>
          <Typography variant='h5' className='font-semibold mbe-1'>
            Adventure starts here 🚀
          </Typography>
          <div className='flex flex-col gap-5'>
            <Typography variant='body2' className='mbs-1'>
              Make your app management easy and fun!
            </Typography>
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
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link className={commonStyles.primaryColor} href='/' onClick={e => e.preventDefault()}>
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
              <Button fullWidth variant='contained' type='submit'>
                Sign Up
              </Button>
              <div className='flex justify-center items-center flex-wrap gap-2'>
                <Typography className={commonStyles.textSecondary}>Already have an account?</Typography>
                <Typography component={Link} href='/pages/auth/login-v1' className={commonStyles.primaryColor}>
                  Sign in instead
                </Typography>
              </div>
              <Divider className='gap-3'>Or</Divider>
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

export default RegisterV1
