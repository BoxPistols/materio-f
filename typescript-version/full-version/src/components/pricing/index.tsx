'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import PlanDetails from './PlanDetails'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

const Pricing = ({ data }: { data: PricingPlanType[] }) => {
  // States
  const [pricingPlan, setPricingPlan] = useState<'monthly' | 'annually'>('annually')

  // Hooks
  const isAboveSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  const handleChange = (e: ChangeEvent<{ checked: boolean }>) => {
    if (e.target.checked) {
      setPricingPlan('annually')
    } else {
      setPricingPlan('monthly')
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <Typography variant='h4'>Pricing Plans</Typography>
        <div className={classnames('flex items-center text-center flex-col', styles.marginBottom)}>
          <Typography variant='body2'>
            All plans include 40+ advanced tools and features to boost your product.
          </Typography>
          <Typography variant='body2'>Choose the best plan to fit your needs.</Typography>
        </div>
        <div className='flex justify-center items-center relative mbs-0.5'>
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer'>
            Monthly
          </InputLabel>
          <Switch id='pricing-switch' onChange={handleChange} checked={pricingPlan === 'annually'} />
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer'>
            Annually
          </InputLabel>
          {isAboveSmScreen && (
            <div className={classnames('flex absolute left-1/2', styles.popularPlan)}>
              <i className={classnames('ri-corner-left-down-line mbs-2 mie-1', commonStyles.textDisabled)} />
              <Chip label='Save up to 10%' size='small' color='primary' variant='tonal' />
            </div>
          )}
        </div>
      </div>
      <Grid container spacing={6}>
        {data?.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PlanDetails data={plan} pricingPlan={pricingPlan} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Pricing
