// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

type Data = {
  title: string
  value: string
  avatarIcon: string
  avatarColor?: ThemeColor
  change: string
  changeNumber: string
  subTitle: string
}

const data: Data[] = [
  {
    title: 'Session',
    value: '21,459',
    avatarIcon: 'ri-group-line',
    avatarColor: 'primary',
    change: 'positive',
    changeNumber: '29%',
    subTitle: 'Total User'
  },
  {
    title: 'Paid Users',
    value: '4,567',
    avatarIcon: 'ri-user-add-line',
    avatarColor: 'error',
    change: 'positive',
    changeNumber: '18%',
    subTitle: 'Last week analytics'
  },
  {
    title: 'Active Users',
    value: '19,860',
    avatarIcon: 'ri-user-follow-line',
    avatarColor: 'success',
    change: 'negative',
    changeNumber: '14%',
    subTitle: 'Last week analytics'
  },
  {
    title: 'Pending Users',
    value: '237',
    avatarIcon: 'ri-user-search-line',
    avatarColor: 'warning',
    change: 'positive',
    changeNumber: '42%',
    subTitle: 'Last week analytics'
  }
]

const CardStatisticsHorizontal = () => {
  return (
    <Grid container spacing={6}>
      {data.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent className='flex justify-between gap-1'>
              <div className='flex flex-col gap-1 flex-grow'>
                <Typography color='text.primary'>{card.title}</Typography>
                <div className='flex items-center gap-2 flex-wrap'>
                  <Typography variant='h4'>{card.value}</Typography>
                  <Typography color={card.change === 'negative' ? 'error.main' : 'success.main'}>
                    {`(${card.change === 'negative' ? '-' : '+'}${card.changeNumber})`}
                  </Typography>
                </div>
                <Typography variant='body2'>{card.subTitle}</Typography>
              </div>
              <CustomAvatar color={card.avatarColor} skin='light' variant='rounded' size={42}>
                <i className={classnames(card.avatarIcon, 'text-[26px]')} />
              </CustomAvatar>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default CardStatisticsHorizontal
