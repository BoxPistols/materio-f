// React Imports
import type { MouseEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const CardBreadcrumb = () => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    // eslint-disable-next-line no-console
    console.info('You clicked a breadcrumb.')
  }

  return (
    <Card>
      <CardContent>
        <Breadcrumbs aria-label='breadcrumb'>
          <a href='/' onClick={handleClick}>
            MUI
          </a>
          <a href='/' onClick={handleClick}>
            Core
          </a>
          <Typography color='text.primary'>Breadcrumb</Typography>
        </Breadcrumbs>

        <Breadcrumbs separator='-' aria-label='breadcrumb'>
          <a href='/' onClick={handleClick}>
            MUI
          </a>
          <a href='/' onClick={handleClick}>
            Core
          </a>
          <Typography color='text.primary'>Breadcrumb</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-label='breadcrumb' separator={<i className='ri-arrow-right-s-line text-xl' />}>
          <a href='/' onClick={handleClick}>
            MUI
          </a>
          <a href='/' onClick={handleClick}>
            Core
          </a>
          <Typography color='text.primary'>Breadcrumb</Typography>
        </Breadcrumbs>

        <Breadcrumbs aria-label='breadcrumb' className='mbs-2'>
          <a href='/' onClick={handleClick} className='flex items-center gap-0.5'>
            <i className='ri-home-8-line' />
            MUI
          </a>
          <a href='/' onClick={handleClick} className='flex items-center gap-0.5'>
            <i className='ri-bookmark-line' />
            Core
          </a>
          <Typography className='flex items-center gap-0.5' color='text.primary'>
            <i className='ri-file-3-line' />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </CardContent>
    </Card>
  )
}

export default CardBreadcrumb
