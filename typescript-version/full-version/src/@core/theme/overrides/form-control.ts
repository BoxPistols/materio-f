// MUI Imports
import type { Theme } from '@mui/material/styles'

const formControl: Theme['components'] = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        '&.Mui-disabled .MuiFormControlLabel-label': {
          color: 'var(--mui-palette-text-primary)'
        },

        // Radio & Checkbox
        '&.Mui-disabled:not(:has(.MuiSwitch-switchBase))': {
          opacity: 0.45
        },

        // Switch
        '&.Mui-disabled .MuiSwitch-root:has(.MuiSwitch-switchBase.Mui-disabled), &.Mui-disabled:has(.MuiSwitch-switchBase) .MuiFormControlLabel-label':
          {
            opacity: 0.45
          }
      }
    }
  }
}

export default formControl
