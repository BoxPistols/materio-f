'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import StepperWrapper from '@core/styles/stepper'
import StepAccountDetails from './StepAccountDetails'
import StepPersonalInfo from './StepPersonalInfo'
import StepBillingDetails from './StepBillingDetails'
import StepperCustomDot from '@views/forms/form-wizard/StepperCustomDot'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

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

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }
  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  // Hooks
  const isAboveLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))

  return (
    <div className='flex h-full justify-between items-center'>
      {isAboveLgScreen && (
        <div className={classnames('flex h-full items-center justify-center w-full', styles.imgWidth)}>
          <img
            src='/images/illustrations/characters/8.png'
            alt='multi-steps-character'
            className={classnames('mis-[85px]', styles.characterHeight, {
              [styles.characterRtl]: direction === 'rtl'
            })}
          />
        </div>
      )}

      <div className={classnames('flex justify-center items-center h-full w-full', commonStyles.paperColor)}>
        <StepperWrapper className={classnames('p-8', styles.contentWidth)}>
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
