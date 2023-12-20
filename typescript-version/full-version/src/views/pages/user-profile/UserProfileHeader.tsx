'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useMediaQuery } from '@mui/material'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ProfileHeaderType } from '@/types/pages/profileTypes'

const UserProfileHeader = ({ data }: { data?: ProfileHeaderType }) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Card>
      <CardMedia image={data?.coverImg} className='bs-[250px]' />
      <CardContent
        className={classnames('flex gap-6 items-end pt-0 justify-start', {
          'justify-center flex-col items-center': isBelowMdScreen
        })}
      >
        <div className='flex, rounded-bs-md mbs-[-45px] border-5 border-backgroundPaper'>
          <img height={120} width={120} src={data?.profileImg} className='rounded' alt='Profile Background' />
        </div>
        <div
          className={classnames('flex w-full flex-wrap justify-between items-end gap-5', {
            'justify-center flex-col items-center': isBelowSmScreen
          })}
        >
          <div className={classnames('flex flex-col items-start gap-2', { 'items-center': isBelowSmScreen })}>
            <Typography variant='h4'>{data?.fullName}</Typography>
            <div
              className={classnames('flex flex-wrap gap-6', {
                'justify-center': isBelowSmScreen
              })}
            >
              <div className='flex items-center gap-2'>
                {data?.designationIcon && <i className={classnames('text-textSecondary', data?.designationIcon)} />}
                <Typography className='font-medium'>{data?.designation}</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <i className='ri-map-pin-2-line text-textSecondary' />
                <Typography className='font-medium'>{data?.location}</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <i className='ri-calendar-line text-textSecondary' />
                <Typography className='font-medium'>{data?.joiningDate}</Typography>
              </div>
            </div>
          </div>
          <Button variant='contained' className='flex gap-2'>
            <i className='ri-user-follow-line text-base'></i>
            <span>Connected</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserProfileHeader
