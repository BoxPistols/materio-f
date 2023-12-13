'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

const Congratulations = () => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Card className={classnames('relative overflow-visible', { ' mt-6': isBelowMdScreen && !isBelowSmScreen })}>
      <CardContent className={classnames({ '!pbe-0': isBelowSmScreen })}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' className='mbe-9'>
              Congratulations <span className='font-bold'>John!</span> 🎉
            </Typography>
            <Typography>
              You have done 72% 😎 more sales today. Check your new raising badge in your profile.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={classnames('flex justify-center', { 'absolute inline-end-11 bottom-0': !isBelowSmScreen })}
          >
            <img
              alt='Congratulations John'
              src='/images/illustrations/characters-with-objects/8.png'
              className={classnames('bs-auto max-is-full max-bs-[189px]', {
                static: isBelowSmScreen
              })}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Congratulations
