// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

const products = [
  {
    imgSrc: '/images/pages/google-home.png',
    imgAlt: 'Google Home',
    productName: 'Google - Google Home - White',
    soldBy: 'Google',
    inStock: true,
    price: 299,
    originalPrice: 359
  },
  {
    imgSrc: '/images/pages/iPhone-11.png',
    imgAlt: 'Apple iPhone',
    productName: 'Apple iPhone 11 (64GB, Black)',
    soldBy: 'Apple',
    inStock: true,
    price: 899,
    originalPrice: 999
  }
]

const StepConfirmation = () => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div className='flex items-center flex-col text-center gap-4'>
          <Typography variant='h4'>Thank You! 😇</Typography>
          <Typography>
            Your order <span className={classnames(commonStyles.textPrimary, 'font-medium')}>#1536548131</span> has been
            placed!
          </Typography>
          <div>
            <Typography>
              We sent an email to{' '}
              <span className={classnames('font-medium', commonStyles.textPrimary)}>john.doe@example.com</span> with
              your order confirmation and receipt.
            </Typography>
            <Typography>
              If the email hasn&#39;t arrived within two minutes, please check your spam folder to see if the email was
              routed there.
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <i className='ri-time-line text-xl' />
            <Typography>Time placed: 25/05/2020 13:35pm</Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div
          className={classnames('flex', commonStyles.border, commonStyles.borderRadius, {
            'flex-col': isBelowMdScreen
          })}
        >
          <div
            className={classnames('flex flex-col w-full p-5 gap-4', {
              [styles.borderBottom]: isBelowMdScreen,
              [styles.borderRight]: !isBelowMdScreen,
              'items-center': isBelowSmScreen
            })}
          >
            <div className='flex items-center gap-2'>
              <i className='ri-map-pin-line text-2xl' />
              <Typography className='font-medium' color='text.primary'>
                Shipping
              </Typography>
            </div>
            <div>
              <Typography>John Doe</Typography>
              <Typography>4135 Parkway Street,</Typography>
              <Typography>Los Angeles, CA 90017,</Typography>
              <Typography>USA</Typography>
            </div>
            <Typography className='font-medium'>+123456789</Typography>
          </div>
          <div
            className={classnames('flex flex-col w-full p-5 gap-4', {
              [styles.borderBottom]: isBelowMdScreen,
              [styles.borderRight]: !isBelowMdScreen,
              'items-center': isBelowSmScreen
            })}
          >
            <div className='flex items-center gap-2'>
              <i className='ri-bank-card-line text-2xl' />
              <Typography className='font-medium' color='text.primary'>
                Billing Address
              </Typography>
            </div>
            <div>
              <Typography>John Doe</Typography>
              <Typography>4135 Parkway Street,</Typography>
              <Typography>Los Angeles, CA 90017,</Typography>
              <Typography>USA</Typography>
            </div>
            <Typography className='font-medium'>+123456789</Typography>
          </div>
          <div
            className={classnames('flex flex-col w-full p-5 gap-4', {
              [styles.borderBottom]: isBelowMdScreen,
              'items-center': isBelowSmScreen
            })}
          >
            <div className='flex items-center gap-2'>
              <i className='ri-ship-2-line text-2xl' />
              <Typography className='font-medium' color='text.primary'>
                Shipping Method
              </Typography>
            </div>
            <Typography className='font-medium'>Preferred Method:</Typography>
            <div>
              <Typography>Standard Delivery</Typography>
              <Typography>(Normally 3-4 business days)</Typography>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={8} xl={9}>
        <div className={classnames(commonStyles.border, commonStyles.borderRadius)}>
          {products.map((product, index) => (
            <div
              key={index}
              className={classnames('flex items-center', styles.borderBottom, { 'flex-col': isBelowSmScreen })}
            >
              <img height={80} width={80} src={product.imgSrc} alt={product.imgAlt} />
              <div
                className={classnames('flex justify-between w-full p-5', { 'flex-col items-center': isBelowSmScreen })}
              >
                <div className={classnames('flex flex-col gap-2 items-start', { 'items-center': isBelowSmScreen })}>
                  <Typography className='font-medium' color='text.primary'>
                    {product.productName}
                  </Typography>
                  <div className='flex items-center gap-1'>
                    <Typography>Sold By:</Typography>
                    <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                      {product.soldBy}
                    </Typography>
                  </div>
                  {product.inStock && <Chip variant='tonal' size='small' color='success' label='In Stock' />}
                </div>
                <div className='flex items-center'>
                  <Typography color='primary'>{`$${product.price}`}</Typography>
                  <Typography color='text.disabled' className='line-through'>{`/$${product.originalPrice}`}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <div className={classnames(commonStyles.border, commonStyles.borderRadius)}>
          <CardContent className='flex gap-4 flex-col'>
            <Typography className='font-medium' color='text.primary'>
              Price Details
            </Typography>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between gap-2'>
                <Typography color='text.primary'>Order Total</Typography>
                <Typography>$1198.00</Typography>
              </div>
              <div className='flex items-center justify-between gap-2'>
                <Typography color='text.primary'>Delivery Charges</Typography>
                <div className='flex gap-2'>
                  <Typography className='line-through' color='text.disabled'>
                    $5.00
                  </Typography>
                  <Chip variant='tonal' size='small' color='success' label='Free' />
                </div>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
            <div className='flex items-center justify-between gap-2'>
              <Typography className='font-medium' color='text.primary'>
                Total
              </Typography>
              <Typography className='font-medium' color='text.primary'>
                $1198.00
              </Typography>
            </div>
          </CardContent>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepConfirmation
