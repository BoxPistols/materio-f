// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import LinearProgress from '@mui/material/LinearProgress'

import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Style Imports
import commonStyles from '@/styles/common.module.css'

type DataType = {
  title: string
  imgSrc: string
  amount: string
  progress: number
  subtitle: string
  color?: ThemeColor
}

const data: DataType[] = [
  {
    progress: 75,
    title: 'Zipcar',
    amount: '$24,895.65',
    subtitle: 'Vuejs, React & HTML',
    imgSrc: '/images/cards/zipcar.png'
  },
  {
    progress: 50,
    color: 'info',
    title: 'Bitbank',
    amount: '$8,650.20',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: '/images/cards/bitbank.png'
  },
  {
    progress: 20,
    title: 'Aviato',
    color: 'secondary',
    amount: '$1,245.80',
    subtitle: 'HTML & Angular',
    imgSrc: '/images/cards/aviato.png'
  }
]

const TotalEarning = () => {
  return (
    <Card>
      <CardHeader
        title='Total Earning'
        action={
          <OptionMenu iconClassName={commonStyles.textPrimary} options={['Last 28 Days', 'Last Month', 'Last Year']} />
        }
      ></CardHeader>
      <CardContent>
        <div className='flex items-center'>
          <Typography variant='h3'>$24,895</Typography>
          <i className={classnames('ri-arrow-up-s-line align-bottom', commonStyles.successColor)}></i>
          <Typography component='span' color='success.main'>
            10%
          </Typography>
        </div>
        <Typography>Compared to $84,325 last year</Typography>
        <div className='flex flex-col gap-3.5 mbs-4'>
          {data.map((item, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Avatar src={item.imgSrc} variant='rounded' className={commonStyles.actionHoverColor} />
              <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                <div className='flex flex-col gap-0.5'>
                  <Typography color='text.primary' className='font-medium'>
                    {item.title}
                  </Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                  <Typography color='text.primary' className='font-medium'>
                    {item.amount}
                  </Typography>
                  <LinearProgress
                    variant='determinate'
                    value={item.progress}
                    className='is-20 bs-1'
                    color={item.color}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalEarning