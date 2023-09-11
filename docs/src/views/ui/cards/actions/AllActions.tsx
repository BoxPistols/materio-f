// React Imports
import React, { useState } from 'react'

// MUI Imports
import Fade from '@mui/material/Fade'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const CardActionAll = () => {
  // States
  const [collapse, setCollapse] = useState(false)
  const [reload, setReload] = useState(false)
  const [visibility, setVisibility] = useState(false)

  const handleBackDrop = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  return (
    <Fade in={!visibility} timeout={300}>
      <Card className='relative'>
        <CardHeader
          title='All Actions'
          action={
            <div className='flex'>
              <IconButton size='small' aria-label='collapse' onClick={() => setCollapse(!collapse)}>
                <Icon fontSize='1.25rem' icon={collapse ? 'mdi:chevron-down' : 'mdi:chevron-up'} />
              </IconButton>
              <IconButton size='small' aria-label='refresh-content' onClick={handleBackDrop}>
                <Icon fontSize='1.25rem' icon='mdi:refresh' />
              </IconButton>
              <IconButton size='small' aria-label='remove-card' onClick={() => setVisibility(!visibility)}>
                <Icon fontSize='1.25rem' icon='mdi:close' />
              </IconButton>
            </div>
          }
        />
        <Collapse in={!collapse}>
          <CardContent>
            <Typography variant='body2'>Click on the above icons to see them in action</Typography>
          </CardContent>

          <Backdrop open={reload} className={classnames('absolute text-white', styles.backdropZIndex)}>
            <CircularProgress color='inherit' />
          </Backdrop>
        </Collapse>
      </Card>
    </Fade>
  )
}

export default CardActionAll
