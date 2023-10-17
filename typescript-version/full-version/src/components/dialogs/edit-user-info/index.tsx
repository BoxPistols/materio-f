// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import IconButton from '@mui/material/IconButton'
import { FormControlLabel } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from '@components/dialogs/styles.module.css'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: {
    firstName?: string
    lastName?: string
    userName?: string
    billingEmail?: string
    status?: string
    taxId?: string
    contact?: string
    language?: string[]
    country?: string
    useAsBillingAddress?: boolean
  }
}

const initialData: Props['data'] = {
  firstName: 'Oliver',
  lastName: 'Queen',
  userName: 'oliverQueen',
  billingEmail: 'oliverQueen@gmail.com',
  status: 'status',
  taxId: 'Tax-8894',
  contact: '+ 1 609 933 4422',
  language: ['english'],
  country: 'US',
  useAsBillingAddress: true
}

const status = ['Status', 'Active', 'Inactive', 'Suspended']

const languages = ['English', 'Spanish', 'French', 'German', 'Hindi']

const countries = ['Select Country', 'France', 'Russia', 'China', 'UK', 'US']

const EditUserInfo = ({ open, setOpen, data }: Props) => {
  // States
  const [userData, setUserData] = useState<Props['data']>(data || initialData)

  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClose = () => {
    setOpen(false)
    setUserData(initialData)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        variant='h5'
        className={classnames('flex gap-2 flex-col text-center', styles.dialogTitle, {
          [styles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Edit User Information
        <Typography component='span' variant='body2' className='flex flex-col text-center'>
          Updating user details will receive a privacy audit.
        </Typography>
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent
          className={classnames('overflow-visible', styles.dialogContent, {
            [styles.smDialogContent]: isBelowSmScreen
          })}
        >
          <IconButton onClick={handleClose} className={styles.closeIcon}>
            <i className='ri-close-line' />
          </IconButton>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='First Name'
                placeholder='John'
                value={userData?.firstName}
                onChange={e => setUserData({ ...userData, firstName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Last Name'
                placeholder='Doe'
                value={userData?.lastName}
                onChange={e => setUserData({ ...userData, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='User Name'
                placeholder='JohnDoe'
                value={userData?.userName}
                onChange={e => setUserData({ ...userData, userName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Billing Email'
                placeholder='johnDoe@email.com'
                value={userData?.billingEmail}
                onChange={e => setUserData({ ...userData, billingEmail: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  label='Status'
                  value={userData?.status}
                  onChange={e => setUserData({ ...userData, status: e.target.value as string })}
                >
                  {status.map((status, index) => (
                    <MenuItem key={index} value={status.toLowerCase().replace(/\s+/g, '-')}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Tax ID'
                placeholder='Tax-7490'
                value={userData?.taxId}
                onChange={e => setUserData({ ...userData, taxId: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Contact'
                placeholder='+ 123 456 7890'
                value={userData?.contact}
                onChange={e => setUserData({ ...userData, contact: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  label='Language'
                  multiple
                  value={userData?.language}
                  onChange={e => setUserData({ ...userData, language: e.target.value as string[] })}
                  renderValue={selected => (
                    <div className='flex items-center gap-2'>
                      {(selected as string[]).map(value => (
                        <Chip key={value} label={value} className='capitalize' size='small' />
                      ))}
                    </div>
                  )}
                >
                  {languages.map((language, index) => (
                    <MenuItem key={index} value={language.toLowerCase().replace(/\s+/g, '-')}>
                      {language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
                  label='Country'
                  value={userData?.country?.toLowerCase().replace(/\s+/g, '-')}
                  onChange={e => setUserData({ ...userData, country: e.target.value as string })}
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country.toLowerCase().replace(/\s+/g, '-')}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch checked={userData?.useAsBillingAddress} />}
                label='Use as a billing address?'
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          className={classnames('gap-2 justify-center', styles.dialogActions, {
            [styles.smDialogAction]: isBelowSmScreen
          })}
        >
          <Button variant='contained' onClick={handleClose} type='submit'>
            Submit
          </Button>
          <Button variant='outlined' color='secondary' type='reset' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default EditUserInfo
