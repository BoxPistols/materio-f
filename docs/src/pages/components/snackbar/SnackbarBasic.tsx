// React Imports
import React, { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const SnackbarBasic = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event: Event | SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Button variant='outlined' onClick={handleClick}>
        Open simple snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        message='Note archived'
        autoHideDuration={3000}
        action={
          <>
            <Button size='small' onClick={handleClose}>
              Undo
            </Button>
            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
              <Icon icon='mdi:close' fontSize='1.25rem' />
            </IconButton>
          </>
        }
      />
    </>
  )
}

export default SnackbarBasic
