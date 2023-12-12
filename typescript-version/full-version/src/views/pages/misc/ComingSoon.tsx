'use client'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useColorScheme, type Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Form from '@components/Form'
import Illustrations from '@components/Illustrations'

// Style Imports
import styles from '@views/misc.module.css'

const ComingSoon = () => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const { mode, systemMode } = useColorScheme()

  const miscBackground =
    mode === 'dark' || systemMode === 'dark' ? '/images/pages/misc-mask-dark.png' : '/images/pages/misc-mask-light.png'

  return (
    <>
      <div className='flex flex-col items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
        <div className='flex items-center flex-col text-center gap-10'>
          <div className={classnames({ [styles.viewPortWidth]: isBelowSmScreen })}>
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
            className={classnames('object-cover', styles.illustrationHeight, {
              [styles.illustrationHeightBelowLg]: isBelowLgScreen,
              [styles.illustrationHeightBelowMd]: isBelowMdScreen
            })}
          />
        </div>
        <Illustrations maskImg={{ src: miscBackground }} />
      </div>
    </>
  )
}

export default ComingSoon
