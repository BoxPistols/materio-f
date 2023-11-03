'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ProjectsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

const Projects = ({ data }: { data?: ProjectsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        data.map((item, index) => {
          return (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card>
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-4'>
                      <Avatar src={item.avatar} />
                      <div>
                        <Typography
                          variant='h6'
                          href='/'
                          component={Link}
                          onClick={e => e.preventDefault()}
                          className={styles.title}
                        >
                          {item.title}
                        </Typography>
                        <Typography className={commonStyles.textSecondary}>
                          <span className='font-medium'>Client:</span>
                          {item.client}
                        </Typography>
                      </div>
                    </div>
                    <OptionMenu
                      options={[
                        'Rename Project',
                        'View Details',
                        'Add to Favorite',
                        { divider: true },
                        { text: 'Leave Project', menuItemProps: { className: commonStyles.errorColor } }
                      ]}
                    />
                  </div>
                  <div className='flex items-center justify-between flex-wrap'>
                    <div
                      className={classnames('plb-2 pli-3', commonStyles.borderRadius, commonStyles.actionHoverColor)}
                    >
                      <div className='flex'>
                        <Typography className='font-medium'>{item.budgetSpent}</Typography>
                        <Typography className={commonStyles.textSecondary}>{`/${item.budget}`}</Typography>
                      </div>
                      <Typography className={commonStyles.textSecondary}>Total Budget</Typography>
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex'>
                        <Typography className='font-medium'>Start Date:</Typography>
                        <Typography className={commonStyles.textSecondary}>{item.startDate}</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className='font-medium'>Deadline:</Typography>
                        <Typography className={commonStyles.textSecondary}>{item.deadline}</Typography>
                      </div>
                    </div>
                  </div>
                  <Typography className={commonStyles.textSecondary}>{item.description}</Typography>
                </CardContent>
                <Divider />
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex'>
                      <Typography className='font-medium'>All Hours:</Typography>
                      <Typography className={commonStyles.textSecondary}>{item.hours}</Typography>
                    </div>
                    <Chip size='small' variant='tonal' color={item.chipColor} label={`${item.daysLeft} days left`} />
                  </div>
                  <div>
                    <div className='flex items-center justify-between mbe-2'>
                      <Typography variant='caption'>{`Tasks: ${item.completedTask}/${item.totalTask}`}</Typography>
                      <Typography variant='caption'>{`${Math.round(
                        (item.completedTask / item.totalTask) * 100
                      )}% Completed`}</Typography>
                    </div>
                    <LinearProgress
                      color='primary'
                      variant='determinate'
                      value={Math.round((item.completedTask / item.totalTask) * 100)}
                    />
                  </div>
                  <div className='flex items-center justify-between gap-1'>
                    <div className='flex items-center flex-grow gap-3'>
                      <AvatarGroup className='items-center pull-up'>
                        {item.avatarGroup.map((person, index) => {
                          return (
                            <Tooltip key={index} title={person.name}>
                              <Avatar src={person.avatar} alt={person.name} className='h-8 w-8' />
                            </Tooltip>
                          )
                        })}
                      </AvatarGroup>
                      <Typography variant='caption' className='flex-grow'>
                        {item.members}
                      </Typography>
                    </div>
                    <div className='flex items-center gap-1'>
                      <i className={classnames('ri-wechat-line', commonStyles.textDisabled)} />
                      <Typography variant='body2'>{item.comments}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Projects
