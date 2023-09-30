// MUI Imports
import type { Theme } from '@mui/material/styles'

const formControl: Theme['components'] = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          opacity: 0.45,
          '& .MuiFormControlLabel-label': {
            color: 'var(--mui-palette-text-primary)'
          }
        }
      }
    }
  }
}

export default formControl
