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

// Style Imports
import styles from './register.module.css'

const RegisterV1 = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <Card className={classnames('flex flex-col', styles.card)}>
      <CardContent>
        <div className='flex justify-center items-start'>Logo</div>
        <Typography>Adventure starts here 🚀</Typography>
        <Typography>Make your app management easy and fun!</Typography>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
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
                    <i className={isPasswordShown ? 'mdi-eye-off-outline' : 'mdi-eye-outline'} />
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
                <Link className={styles.primaryColor} href='/' onClick={e => e.preventDefault()}>
                  privacy policy & terms
                </Link>
              </>
            }
          />
          <Button fullWidth variant='contained' type='submit'>
            Sign Up
          </Button>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>Already have an account?</Typography>
            <Typography component={Link} href='/pages/auth/login-v1' className={styles.primaryColor}>
              Sign in instead
            </Typography>
          </div>
          <Divider className='gap-2'>Or</Divider>
          <div className='flex justify-center items-center'>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <i className='mdi-facebook' />
            </IconButton>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <i className='mdi-twitter' />
            </IconButton>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <i className='mdi-github' />
            </IconButton>
            <IconButton href='/' component={Link} onClick={e => e.preventDefault()}>
              <i className='mdi-google' />
            </IconButton>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default RegisterV1
