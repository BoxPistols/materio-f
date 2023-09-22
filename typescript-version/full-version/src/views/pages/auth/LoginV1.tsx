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

// Third-party Imports
import classnames from 'classnames'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './login.module.css'

const LoginV1 = () => {
  // States
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <Card className={classnames('flex flex-col', styles.card)}>
      <CardContent>
        <div className='flex justify-center items-start'>Logo</div>
        <Typography>Welcome to Master!👋🏻</Typography>
        <Typography>Please sign-in to your account and start the adventure</Typography>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <TextField autoFocus fullWidth label='Email' />
          <TextField
            fullWidth
            label='Password'
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                    <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
            <FormControlLabel control={<Checkbox />} label='Remember me' />
            <Typography
              className={classnames('text-end', styles.primaryColor)}
              component={Link}
              href='/pages/auth/forgot-password-v1'
            >
              Forgot password?
            </Typography>
          </div>
          <Button fullWidth variant='contained' type='submit'>
            Log In
          </Button>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>New on our platform?</Typography>
            <Typography component={Link} href='/pages/auth/register-v1' className={styles.primaryColor}>
              Create an account
            </Typography>
          </div>
          <Divider className='gap-2'>Or</Divider>
          <div className='flex justify-center items-center'>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <Icon icon='mdi:facebook' />
            </IconButton>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <Icon icon='mdi:twitter' />
            </IconButton>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <Icon icon='mdi:github' />
            </IconButton>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <Icon icon='mdi:google' />
            </IconButton>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default LoginV1