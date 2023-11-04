// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Style Imports
import commonStyles from '@/styles/common.module.css'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
  direction: Direction
}

const StepPriceDetails = ({ activeStep, handleNext, handlePrev, steps, direction }: Props) => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          placeholder='25,000'
          label='Expected Price'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='ri-money-dollar-circle-line' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          placeholder='500'
          label='Price Per SQFT'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='ri-money-dollar-circle-line' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          placeholder='50'
          label='Maintenance Charge'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='ri-money-dollar-circle-line' />
              </InputAdornment>
            )
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id='select-maintenance'>Maintenance Period</InputLabel>
          <Select labelId='select-maintenance' label='Maintenance Period' defaultValue=''>
            <MenuItem value='monthly'>Monthly</MenuItem>
            <MenuItem value='quarterly'>Quarterly</MenuItem>
            <MenuItem value='half-yearly'>Half Yearly</MenuItem>
            <MenuItem value='yearly'>Yearly</MenuItem>
            <MenuItem value='one-time'>One-time</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          placeholder='250'
          label='Booking/Token Amount'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='ri-money-dollar-circle-line' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          type='number'
          placeholder='500'
          label='Other Amount'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <i className='ri-money-dollar-circle-line' />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl className='gap-2'>
          <FormLabel className={classnames(commonStyles.textPrimary, 'text-sm font-medium')} id='price-radio'>
            Show Price As
          </FormLabel>
          <RadioGroup name='price-group' defaultValue='negotiable' aria-labelledby='price-radio'>
            <FormControlLabel value='negotiable' control={<Radio />} label='Negotiable' />
            <FormControlLabel value='call-for-price' control={<Radio />} label='Call For Price' />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl className='gap-2'>
          <FormLabel className={classnames(commonStyles.textPrimary, 'text-sm font-medium')}>Price Includes</FormLabel>
          <FormControlLabel control={<Checkbox defaultChecked />} label='Car Parking' />
          <FormControlLabel control={<Checkbox />} label='Club Membership' />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
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
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
            onClick={handleNext}
            endIcon={
              <i
                className={
                  activeStep === steps.length - 1
                    ? 'ri-check-line'
                    : direction === 'rtl'
                    ? 'ri-arrow-left-line'
                    : 'ri-arrow-right-line'
                }
              />
            }
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepPriceDetails
