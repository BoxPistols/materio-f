'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import type { TimelineProps } from '@mui/lab/Timeline'

// Third-Party Imports
import classnames from 'classnames'

// Style Imports
import styles from '../styles.module.css'
import commonStyles from '@/styles/common.module.css'

const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  return (
    <Card>
      <CardHeader
        title='Activity Timeline'
        avatar={<i className={classnames('ri-bar-chart-2-line', commonStyles.textSecondary)} />}
        titleTypographyProps={{ variant: 'h5' }}
      />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-1.5'>
                <Typography className='font-medium'>12 Invoices have been paid</Typography>
                <Typography variant='caption' color='text.disabled'>
                  12 min ago
                </Typography>
              </div>
              <Typography className='mbe-2' color='text.secondary'>
                Invoices have been paid to the company.
              </Typography>
              <div className='flex'>
                <div
                  className={classnames(
                    'flex gap-2.5 items-center pli-2.5',
                    styles.pdfBackground,
                    commonStyles.actionHoverColor,
                    commonStyles.borderRadius
                  )}
                >
                  <img alt='invoice.pdf' src='/images/icons/pdf-document.png' className='h-5' />
                  <Typography className='font-medium' color='text.secondary'>
                    invoice.pdf
                  </Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-1.5'>
                <Typography className='font-medium'>Client Meeting</Typography>
                <Typography variant='caption' color='text.disabled'>
                  45 min ago
                </Typography>
              </div>
              <Typography color='text.secondary' className='mbe-2'>
                Project meeting with john @10:15am
              </Typography>
              <div className='flex items-center gap-2.5'>
                <Avatar src='/images/avatars/1.png' className='w-8 h-8' />
                <div>
                  <Typography variant='body2' className='font-medium'>
                    Lester McCarthy (Client)
                  </Typography>
                  <Typography variant='body2'>CEO of ThemeSelection</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-1.5'>
                <Typography className='font-medium'>Create a new project for client</Typography>
                <Typography variant='caption' color='text.disabled'>
                  2 Day Ago
                </Typography>
              </div>
              <Typography color='text.secondary' className='mbe-2'>
                6 team members in a project
              </Typography>
              <AvatarGroup total={6}>
                <Avatar alt='Remy Sharp' src='/images/avatars/1.png' />
                <Avatar alt='Travis Howard' src='/images/avatars/8.png' />
                <Avatar alt='Cindy Baker' src='/images/avatars/6.png' />
              </AvatarGroup>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
