// React Imports
import React, { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import type { Theme } from '@mui/material/styles'

const DialogsRespoFullScreen = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)

  // Hooks
  const fullScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogsRespoFullScreen
