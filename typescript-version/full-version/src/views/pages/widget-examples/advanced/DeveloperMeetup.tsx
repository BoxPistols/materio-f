// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@/@core/components/mui/Avatar'

// Styles Imports
import commonStyles from '@/styles/common.module.css'

const DeveloperMeetup = () => {
  return (
    <Card>
      <CardMedia className='bs-[162px]' image='/images/cards/workstation.png'></CardMedia>
      <CardContent className='flex flex-col gap-5'>
        <div className='flex items-center gap-4'>
          <CustomAvatar variant='rounded' skin='light' color='primary' size={58} className='flex flex-col'>
            <Typography color='primary'>Jan</Typography>
            <Typography variant='h5' color='primary'>
              24
            </Typography>
          </CustomAvatar>
          <div className='flex flex-col gap-1'>
            <Typography color='text.primary' className='font-medium'>
              Developer Meetup
            </Typography>
            <Typography variant='body2'>
              The WordPress open source,free software project is the community behind the…
            </Typography>
          </div>
        </div>
        <Divider />
        <div className='flex justify-between'>
          <div className='flex flex-col gap-1 items-center'>
            <i className={classnames('ri-star-smile-line', commonStyles.textSecondary)}></i>
            <Typography>Interested</Typography>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <i className={classnames('ri-check-double-line', commonStyles.textSecondary)}></i>
            <Typography>Joined</Typography>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <i className={classnames('ri-group-line', commonStyles.primaryColor)}></i>
            <Typography color='primary'>Invited</Typography>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <i className={classnames('ri-more-line', commonStyles.textSecondary)}></i>
            <Typography>More</Typography>
          </div>
        </div>
        <Divider />
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <i className={classnames('ri-time-line text-xl', commonStyles.textSecondary)}></i>
            <Typography className='flex flex-col'>
              <span>Tuesday, 24 january, 10:20 - 12:30</span>
              <span>After 1 week</span>
            </Typography>
          </div>
          <div className='flex gap-2'>
            <i className={classnames('ri-map-pin-line text-xl', commonStyles.textSecondary)}></i>
            <Typography className='flex flex-col'>
              <span>The Rochard NYC</span>
              <span>1305 Lexington Ave, New York</span>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DeveloperMeetup
