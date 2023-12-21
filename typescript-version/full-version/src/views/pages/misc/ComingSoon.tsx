'use client'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useColorScheme } from '@mui/material/styles'

// Component Imports
import Form from '@components/Form'
import Illustrations from '@components/Illustrations'

const ComingSoon = () => {
  const { mode, systemMode } = useColorScheme()

  const miscBackground =
    mode === 'dark' || systemMode === 'dark' ? '/images/pages/misc-mask-dark.png' : '/images/pages/misc-mask-light.png'

  return (
    <>
      <div className='flex flex-col items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
        <div className='flex items-center flex-col text-center gap-10'>
          <div className='is-[90vw] sm:is-[unset]'>
            <div className='flex flex-col gap-2'>
              <Typography variant='h4'>We are launching soon 🚀</Typography>
              <Typography className='mbe-10'>
                Our website is opening soon. Please register to get notified when it&#39;s ready!
              </Typography>
            </div>
            <Form noValidate autoComplete='off'>
              <div className='flex justify-center gap-4'>
                <TextField autoFocus size='small' type='email' placeholder='Enter your email' />
                <Button type='submit' variant='contained'>
                  Notify
                </Button>
              </div>
            </Form>
          </div>
          <img
            alt='error-illustration'
            src='/images/illustrations/characters/11.png'
            className='object-cover bs-[400px] md:bs-[450px] lg:bs-[500px]'
          />
        </div>
        <Illustrations maskImg={{ src: miscBackground }} />
      </div>
    </>
  )
}

export default ComingSoon
