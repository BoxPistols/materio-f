'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

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

const VerifyEmailV2 = () => {
  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const { mode, systemMode } = useColorScheme()
  const { settings } = useSettings()

  const authBackground =
    mode === 'dark' || systemMode === 'dark'
      ? '/images/pages/auth-v2-mask-dark.png'
      : '/images/pages/auth-v2-mask-light.png'

  const characterIllustration =
    settings.skin === 'bordered'
      ? mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-verify-email-dark-border.png'
        : '/images/illustrations/auth/v2-verify-email-light-border.png'
      : mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-verify-email-dark.png'
        : '/images/illustrations/auth/v2-verify-email-light.png'

  return (
    <div className='flex h-full justify-center'>
      <div className={'flex h-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden'}>
        <div className='plb-12 pis-12'>
          <img src={characterIllustration} alt='' className='max-bs-[500px] max-is-full bs-auto' />
        </div>
        <Illustrations
          image1={{ src: '/images/illustrations/objects/tree-3.png' }}
          image2={null}
          maskImg={{ src: authBackground }}
        />
      </div>
      <div
        className={classnames('flex justify-center items-center h-full p-12', commonStyles.paperColor, {
          '!min-is-full p-6': isBelowMdScreen,
          [styles.rightWrapper]: isAboveMdScreen,
          'p-12': isAboveMdScreen
        })}
      >
        <div className='absolute block-start-[33px] !inline-start-6 sm:inline-start-[38px]'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className='text-primary' height={28} width={35} />
            <Typography variant='h4' className='font-semibold tracking-[0.15px]'>
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
            <Typography variant='h4'>Verify your email ✉️</Typography>
            <Typography className='mbs-1'>
              Account activation link sent to your email address:{' '}
              <span className='font-medium text-textPrimary'>john.doe@email.com</span> Please follow the link inside to
              continue.
            </Typography>
          </div>
          <Button fullWidth variant='contained' type='submit'>
            Skip For Now
          </Button>
          <div className='flex justify-center items-center flex-wrap gap-2'>
            <Typography>Didn&#39;t get the mail?</Typography>
            <Typography color='primary' component={Link} href='/' onClick={e => e.preventDefault()}>
              Resend
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailV2
