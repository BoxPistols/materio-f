// MUI Imports
import type { Theme } from '@mui/material/styles'

const toggleButton: Theme['components'] = {
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.size === 'small' && {
          borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
        }),
        ...(ownerState.size === 'large' && {
          borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
        })
      })
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      sizeSmall: {
        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
      },
      sizeLarge: {
        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
      }
    }
  }
}

export default toggleButton
