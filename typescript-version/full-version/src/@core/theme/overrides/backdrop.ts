// MUI Imports
import type { Theme } from '@mui/material/styles'

const backdrop: Theme['components'] = {
  MuiBackdrop: {
    styleOverrides: {
      root: {
        '&:not(.MuiBackdrop-invisible)': {
          backgroundColor: 'rgb(var(--mui-mainColorChannels-light) / 0.5)',
          '[data-mui-color-scheme="dark"] &': {
            backgroundColor: 'rgb(21 16 43 / 0.6)'
          }
        }
      }
    }
  }
}

export default backdrop
