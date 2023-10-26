// MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

type Props = {
  pricingPlan: 'monthly' | 'annually'
  data: PricingPlanType
}

const PlanDetails = ({ data, pricingPlan }: Props) => {
  return (
    <CardContent
      className={classnames(
        'relative pli-5 !pbe-5 flex flex-col gap-5',
        styles.cardPadding,
        commonStyles.border,
        commonStyles.borderRadius,
        {
          [styles.active]: data?.popularPlan
        }
      )}
    >
      {data?.popularPlan ? (
        <Chip
          color='primary'
          label='Popular'
          size='small'
          className='absolute block-start-4 inline-end-5'
          variant='tonal'
        />
      ) : null}
      <div className='flex justify-center'>
        <img
          src={data?.imgSrc}
          height={data?.imgHeight}
          width={data?.imgWidth}
          alt={`${data?.title.toLowerCase().replace(' ', '-')}-img`}
        />
      </div>
      <div className='text-center flex flex-col gap-1'>
        <Typography variant='h5'>{data?.title}</Typography>
        <Typography variant='body2'>{data?.subtitle}</Typography>
      </div>
      <div className='relative mlb-3'>
        <div className='flex justify-center'>
          <Typography
            variant='body2'
            component='sup'
            className={classnames(commonStyles.textSecondary, 'self-start font-medium')}
          >
            $
          </Typography>
          <Typography variant='h3' component='span' color='primary'>
            {pricingPlan === 'monthly' ? data?.monthlyPrice : data?.yearlyPlan.monthly}
          </Typography>
          <Typography
            variant='body2'
            component='sub'
            className={classnames(commonStyles.textSecondary, 'self-end font-medium')}
          >
            /month
          </Typography>
        </div>
        {pricingPlan !== 'monthly' && data?.monthlyPrice !== 0 ? (
          <Typography
            variant='caption'
            className={classnames(commonStyles.textDisabled, styles.transformation, 'absolute inline-end-1/2 ')}
          >{`USD ${data?.yearlyPlan.annually}/year`}</Typography>
        ) : null}
      </div>
      <div className='flex flex-col gap-4'>
        {data?.planBenefits.map((item: string, index: number) => (
          <div key={index} className='flex items-center gap-2'>
            <span className='inline-flex'>
              <i className={classnames('ri-checkbox-blank-circle-line text-sm', commonStyles.textSecondary)} />
            </span>
            <Typography variant='body2' className={commonStyles.textSecondary}>
              {item}
            </Typography>
          </div>
        ))}
      </div>
      <Button
        fullWidth
        color={data?.currentPlan ? 'success' : 'primary'}
        variant={data?.popularPlan ? 'contained' : 'outlined'}
      >
        {data?.currentPlan ? 'Your Current Plan' : 'Upgrade'}
      </Button>
    </CardContent>
  )
}

export default PlanDetails
