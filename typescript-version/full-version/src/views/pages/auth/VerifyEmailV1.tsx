'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
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

const VerifyEmailV1 = () => {
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
            <Logo color='text.primary' height={28} width={35} />
            <Typography variant='h5' className='font-semibold'>
              {themeConfig.templateName}
            </Typography>
          </div>
          <Typography variant='h5' className='font-semibold mbe-1'>
            Verify your email ✉️
          </Typography>
          <div className='flex flex-col gap-5'>
            <Typography color='text.secondary'>
              Account activation link sent to your email address:{' '}
              <span className='font-medium' color='text.primary'>
                john.doe@email.com
              </span>{' '}
              Please follow the link inside to continue.
            </Typography>
            <Button fullWidth variant='contained' type='submit'>
              Skip For Now
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography color='text.secondary'>Didn&#39;t get the mail?</Typography>
              <Typography color='text.primary' component={Link} href='/' onClick={e => e.preventDefault()}>
                Resend
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default VerifyEmailV1
