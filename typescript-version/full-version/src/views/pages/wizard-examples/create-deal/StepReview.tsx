// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import commonStyles from '@/styles/common.module.css'

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
  direction: Direction
}

const StepReview = ({ activeStep, handleNext, handlePrev, steps, direction }: Props) => {
  return (
    <Grid container spacing={6} className='pbs-5'>
      <Grid item xs={12} lg={6} className='flex flex-col gap-4'>
        <Typography variant='h4'>Almost done! 🚀</Typography>
        <Typography>Confirm your deal details information and submit to create it.</Typography>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <td className='plb-1'>
                <Typography className='font-medium'>Deal Type</Typography>
              </td>
              <td className='plb-1'>
                <Typography>Percentage</Typography>
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Amount</Typography>
              </td>
              <td className='plb-1'>
                <Typography>25% </Typography>
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Deal Code</Typography>
              </td>
              <td className='plb-1'>
                <Chip variant='tonal' label='25PEROFF' color='warning' />
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Deal Title</Typography>
              </td>
              <td className='plb-1'>
                <Typography>Black friday sale, 25% OFF </Typography>
              </td>
            </tr>
            <tr>
              <td className='font-medium plb-1'>
                <Typography className='font-medium'>Deal Duration</Typography>
              </td>
              <td className='plb-1'>
                <Typography>2021-07-14 to 2021-07-30 </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        <FormControlLabel control={<Switch />} label='I have confirmed the deal details.' />
      </Grid>
      <Grid item lg={6} xl={5} xs={12}>
        <div
          className={classnames(
            commonStyles.border,
            commonStyles.borderRadius,
            'flex justify-center items-end w-full h-full'
          )}
        >
          <img alt='review-illustration' src='/images/illustrations/characters/6.png' height={305} />
        </div>
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

export default StepReview
