'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepAccountDetails from './StepAccountDetails'
import StepPersonalInfo from './StepPersonalInfo'
import StepBillingDetails from './StepBillingDetails'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'
import Logo from '@core/svg/Logo'

const steps = [
  {
    title: 'Account',
    subtitle: 'Account Details'
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information'
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details'
  }
]

const getStepContent = (step: number, handleNext: () => void, handlePrev: () => void, direction: Direction) => {
  switch (step) {
    case 0:
      return <StepAccountDetails handleNext={handleNext} direction={direction} />
    case 1:
      return <StepPersonalInfo handleNext={handleNext} handlePrev={handlePrev} direction={direction} />
    case 2:
      return <StepBillingDetails handlePrev={handlePrev} direction={direction} />

    default:
      return null
  }
}

const RegisterMultiSteps = ({ direction }: { direction: Direction }) => {
  // States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Hooks
  const { settings } = useSettings()

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }
  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className='flex bs-full justify-between items-center'>
      <div
        className={classnames('flex bs-full items-center justify-center is-[594px] max-md:hidden', {
          'border-ie': settings.skin === 'bordered'
        })}
      >
        <img
          src='/images/illustrations/characters/8.png'
          alt='multi-steps-character'
          className={classnames('mis-[92px] bs-auto max-bs-[628px] max-is-full', {
            'scale-x-[-1]': direction === 'rtl'
          })}
        />
      </div>
      <div className='flex justify-center items-center bs-full is-full bg-backgroundPaper'>
        <div className='absolute block-start-[33px] !inline-start-6 sm:inline-start-[38px]'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className='text-primary' height={28} width={35} />
            <Typography variant='h4' className='font-semibold tracking-[0.15px]'>
              {themeConfig.templateName}
            </Typography>
          </div>
        </div>
        <StepperWrapper className='p-8 is-[700px]'>
          <Stepper activeStep={activeStep} className='mbe-12'>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number' color='text.primary'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title' color='text.primary'>
                          {step.title}
                        </Typography>
                        <Typography className='step-subtitle' color='text.primary'>
                          {step.subtitle}
                        </Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
          {getStepContent(activeStep, handleNext, handlePrev, direction)}
        </StepperWrapper>
      </div>
    </div>
  )
}

export default RegisterMultiSteps
