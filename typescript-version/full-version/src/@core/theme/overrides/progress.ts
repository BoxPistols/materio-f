// MUI Imports
import type { Theme } from '@mui/material/styles'

const progress: Theme['components'] = {
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        height: 6,
        borderRadius: 6
      },
      bar: {
        borderRadius: 6
      }
    }
  }
}

export default progress
