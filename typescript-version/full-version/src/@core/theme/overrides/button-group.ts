// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const buttonGroup: Theme['components'] = {
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    },
    styleOverrides: {
      contained: ({ ownerState }) => ({
        ...(ownerState.disabled && {
          boxShadow: 'none'
        })
      })
    }
  }
}

export default buttonGroup
