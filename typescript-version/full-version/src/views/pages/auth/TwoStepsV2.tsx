'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useColorScheme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Component Imports
import Logo from '@core/svg/Logo'
import Illustrations from '@components/Illustrations'

const TwoStepsV2 = () => {
  const { settings } = useSettings()
  const { mode, systemMode } = useColorScheme()

  const authBackground =
    mode === 'dark' || systemMode === 'dark'
      ? '/images/pages/auth-v2-mask-dark.png'
      : '/images/pages/auth-v2-mask-light.png'

  const characterIllustration =
    settings.skin === 'bordered'
      ? mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-two-steps-dark-border.png'
        : '/images/illustrations/auth/v2-two-steps-light-border.png'
      : mode === 'dark' || systemMode === 'dark'
        ? '/images/illustrations/auth/v2-two-steps-dark.png'
        : '/images/illustrations/auth/v2-two-steps-light.png'

  return (
    <div className='flex h-full justify-center'>
      <div className='flex h-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden'>
        <div className='plb-12 pis-12'>
          <img
            src={characterIllustration}
            alt='character-illustration'
            className='max-bs-[500px] max-is-full bs-auto'
          />
        </div>
        <Illustrations
          image1={{ src: '/images/illustrations/objects/tree-3.png' }}
          image2={null}
          maskImg={{ src: authBackground }}
        />
      </div>
      <div className='flex justify-center items-center h-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <div className='absolute block-start-[33px] !inline-start-6 sm:inline-start-[38px]'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className='text-primary' height={28} width={35} />
            <Typography variant='h4' className='font-semibold tracking-[0.15px]'>
              {themeConfig.templateName}
            </Typography>
          </div>
        </div>
        <div className='flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>Two Step Verification 💬</Typography>
            <Typography className='mbs-1'>
              We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            </Typography>
            <Typography className='font-medium' color='text.primary'>
              ******1234
            </Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
            <Button fullWidth variant='contained' type='submit'>
              Skip For Now
            </Button>
            <div className='flex items-center justify-between gap-4'>
              <TextField autoFocus />
              <TextField />
              <TextField />
              <TextField />
              <TextField />
              <TextField />
            </div>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Didn&#39;t get the code?</Typography>
              <Typography color='primary' component={Link} href='/' onClick={e => e.preventDefault()}>
                Resend
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TwoStepsV2
