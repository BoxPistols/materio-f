// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'  

const CardAppBar = () => {
  return (
    <Card>
      <CardContent>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' className='mie-2.5' color='inherit' aria-label='menu'>
              <i className='ri-menu-line' />
            </IconButton>
            <Typography variant='h6' className={classnames('flex-grow', styles.appBarColor)}>
              News
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </CardContent>
    </Card>
  )
}

export default CardAppBar
