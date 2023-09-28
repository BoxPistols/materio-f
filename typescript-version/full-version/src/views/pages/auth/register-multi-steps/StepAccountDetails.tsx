// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const StepAccountDetails = ({ handleNext }: { handleNext: () => void }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setIsPasswordShown(!isPasswordShown)
  }
  const handleClickShowConfirmPassword = () => {
    setIsConfirmPasswordShown(!isConfirmPasswordShown)
  }

  return (
    <>
      <Typography>Account Information</Typography>
      <Typography>Enter Your Account Details</Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Username' placeholder='johnDoe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth type='email' label='Email' placeholder='johndoe@gmail.com' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Password'
            placeholder='············'
            id='outlined-adornment-password'
            type={isPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <Icon icon={isPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Confirm Password'
            placeholder='············'
            id='outlined-confirm-password'
            type={isConfirmPasswordShown ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle confirm password visibility'
                  >
                    <Icon icon={isConfirmPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Profile Link' placeholder='johndoe/profile' />
        </Grid>
        <Grid item xs={12} className='flex justify-between'>
          <Button disabled variant='contained' startIcon={<Icon icon='mdi:chevron-left' />}>
            Previous
          </Button>
          <Button variant='contained' onClick={handleNext} endIcon={<Icon icon='mdi:chevron-right' />}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepAccountDetails
