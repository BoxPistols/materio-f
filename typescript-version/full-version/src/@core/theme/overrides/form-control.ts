// MUI Imports
import type { Theme } from '@mui/material/styles'

const formControl: Theme['components'] = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        '&.Mui-disabled .MuiFormControlLabel-label': {
          color: 'var(--mui-palette-text-primary)'
        },
        '&.Mui-disabled:not(:has(.MuiSwitch-switchBase))': {
          opacity: 0.45
        },
        '&.Mui-disabled:has(.MuiSwitch-switchBase) .MuiFormControlLabel-label': {
          opacity: 0.45
        }
      }
    }
  }
}

export default formControl
