'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Component Imports
import Form from '@components/Form'
import Illustrations from '@components/Illustrations'

// Component Imports
import Logo from '@core/svg/Logo'

// Style Imports
import styles from './v1.module.css'
import commonStyles from '@/styles/common.module.css'

const ForgotPasswordV1 = ({ direction }: { direction: Direction }) => {
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
            Forgot Password 🔒
          </Typography>
          <div className='flex flex-col gap-5'>
            <Typography variant='body2' className='mbs-1'>
              Enter your email and we&#39;ll send you instructions to reset your password
            </Typography>
            <Form noValidate autoComplete='off' className='flex flex-col gap-5'>
              <TextField autoFocus fullWidth label='Email' />
              <Button fullWidth variant='contained' type='submit'>
                Send reset link
              </Button>
              <Typography className={classnames('flex justify-center items-center', commonStyles.primaryColor)}>
                <Link href='/pages/auth/login-v1' className='flex items-center'>
                  <i className={direction === 'rtl' ? 'ri-arrow-right-s-line' : 'ri-arrow-left-s-line'} />
                  <span>Back to Login</span>
                </Link>
              </Typography>
            </Form>
          </div>
        </CardContent>
      </Card>
      <Illustrations maskImg={{ src: authBackground }} />
    </div>
  )
}

export default ForgotPasswordV1
