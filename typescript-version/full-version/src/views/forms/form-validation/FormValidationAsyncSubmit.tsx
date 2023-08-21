// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import { toast } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'

// Icon Imports
import Icon from '../../../@core/components/IconifyIcon'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  password: string
}

const FormValidationAsyncSubmit = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    setLoading(true)
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    await sleep(3000)
    setLoading(false)
    toast.success('Form Submitted')
  }

  return (
    <Card>
      <CardHeader title='Async Submit' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Controller
                name='firstName'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='First Name'
                    placeholder='Leonard'
                    fullWidth
                    {...(errors.firstName && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='lastName'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Last Name'
                    placeholder='Carter'
                    fullWidth
                    {...(errors.lastName && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type='email'
                    label='Email'
                    placeholder='carterleonard@gmail.com'
                    {...(errors.email && { error: true, helperText: 'This field is required.' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label='Password'
                    id='outlined-password'
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    {...(errors.password && { error: true, helperText: 'This field is required' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit' className='gap-2'>
                {loading && <CircularProgress size={20} color='inherit' />}
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormValidationAsyncSubmit