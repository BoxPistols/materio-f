// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Config Imports
import themeConfig from '@configs/themeConfig'

type Props = {
  activeStep: number
  isLastStep: boolean
  handleNext: () => void
  handlePrev: () => void
  direction: Direction
}

const Details = ({ activeStep, isLastStep, handleNext, handlePrev, direction }: Props) => {
  // States
  const [value, setValue] = useState<string>('crm')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className='flex flex-col gap-6'>
      <TextField fullWidth label='Application Name' placeholder={`${themeConfig.templateName}`} />
      <div className='flex flex-col gap-4'>
        <Typography variant='h5'>Category</Typography>
        <div onClick={() => setValue('crm')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <CustomAvatar variant='rounded' skin='light' color='info' size={46}>
              <i className='ri-bar-chart-box-line text-[28px]' />
            </CustomAvatar>
            <div className='flex flex-col gap-1'>
              <Typography className='font-medium'>CRM Application</Typography>
              <Typography variant='body2'>Scales with any business</Typography>
            </div>
          </div>
          <Radio value='crm' onChange={handleChange} checked={value === 'crm'} />
        </div>
        <div onClick={() => setValue('eCommerce')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <CustomAvatar variant='rounded' skin='light' color='success' size={46}>
              <i className='ri-shopping-cart-2-line text-[28px]' />
            </CustomAvatar>
            <div className='flex flex-col gap-1'>
              <Typography className='font-medium'>eCommerce Platforms</Typography>
              <Typography variant='body2'>Grow Your Business With App</Typography>
            </div>
          </div>
          <Radio value='eCommerce' onChange={handleChange} checked={value === 'eCommerce'} />
        </div>
        <div onClick={() => setValue('learning')} className='flex items-center justify-between cursor-pointer gap-4'>
          <div className='flex items-center gap-4'>
            <CustomAvatar variant='rounded' skin='light' color='error' size={46}>
              <i className='ri-video-upload-line text-[28px]' />
            </CustomAvatar>
            <div className='flex flex-col gap-1'>
              <Typography className='font-medium'>Online Learning platform</Typography>
              <Typography variant='body2'>Start learning today</Typography>
            </div>
          </div>
          <Radio value='learning' onChange={handleChange} checked={value === 'learning'} />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <Button
          variant='outlined'
          color='secondary'
          disabled={activeStep === 0}
          onClick={handlePrev}
          startIcon={<i className={direction === 'rtl' ? 'ri-arrow-right-line' : 'ri-arrow-left-line'} />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={isLastStep ? 'success' : 'primary'}
          onClick={handleNext}
          endIcon={
            <i
              className={
                isLastStep ? 'ri-check-line' : direction === 'rtl' ? 'ri-arrow-left-line' : 'ri-arrow-right-line'
              }
            />
          }
        >
          {isLastStep ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default Details
