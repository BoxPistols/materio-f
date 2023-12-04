'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Component Imports
import Logo from '@core/svg/Logo'
import Illustrations from '@components/Illustrations'

// Style Imports
import styles from './v2.module.css'
import commonStyles from '@/styles/common.module.css'

const ForgotPasswordV2 = ({ direction }: { direction: Direction }) => {
  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const { settings } = useSettings()
  const { mode, systemMode } = useColorScheme()

  const authBackground =
    mode === 'dark' || systemMode === 'dark'
      ? '/images/pages/auth-v2-mask-dark.png'
      : '/images/pages/auth-v2-mask-light.png'

  const characterIllustration =
    settings.skin === 'bordered'
      ? mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-forgot-password-dark-border.png'
        : '/images/illustrations/auth/v2-forgot-password-light-border.png'
      : mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-forgot-password-dark.png'
        : '/images/illustrations/auth/v2-forgot-password-light.png'

  return (
    <div className='flex h-full justify-center'>
      {isAboveMdScreen && (
        <div className={'flex h-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6'}>
          <div className='plb-12 pis-12'>
            <img src={characterIllustration} alt='' className={styles.illustrationSize} />
          </div>
          <Illustrations
            image1={{ src: '/images/illustrations/objects/tree-2.png' }}
            image2={null}
            maskImg={{ src: authBackground }}
          />
        </div>
      )}
      <div
        className={classnames('flex justify-center items-center h-full', commonStyles.paperColor, {
          '!min-is-full p-6': isBelowMdScreen,
          [styles.rightWrapper]: isAboveMdScreen,
          'p-12': isAboveMdScreen
        })}
      >
        <div className={classnames('absolute', styles.templateName, { '!inline-start-6': isBelowSmScreen })}>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className={commonStyles.primaryColor} height={28} width={35} />
            <Typography variant='h5' className='font-semibold'>
              {themeConfig.templateName}
            </Typography>
          </div>
        </div>
        <div
          className={classnames('flex flex-col gap-5', {
            [styles.rightWrapperBelowMd]: isBelowMdScreen && !isBelowSmScreen,
            'is-[100%]': isAboveMdScreen || isBelowSmScreen
          })}
        >
          <div>
            <Typography variant='h5' className='font-semibold mbe-1'>
              Forgot Password 🔒
            </Typography>
            <Typography variant='body2'>
              Enter your email and we&#39;ll send you instructions to reset your password
            </Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
            <TextField autoFocus fullWidth label='Email' />
            <Button fullWidth variant='contained' type='submit'>
              Send reset link
            </Button>
            <Typography className='flex justify-center items-center' color='primary'>
              <Link href='/pages/auth/login-v2' className='flex items-center'>
                <i className={direction === 'rtl' ? 'ri-arrow-right-s-line' : 'ri-arrow-left-s-line'} />
                <span>Back to Login</span>
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordV2
