// MUI Imports
import type { Theme } from '@mui/material/styles'

const badges: Theme['components'] = {
  MuiBadge: {
    styleOverrides: {
      standard: ({ theme }) => ({
        height: 22,
        minWidth: 22,
        borderRadius: 20,
        lineHeight: 1.167,
        padding: theme.spacing(1, 2)
      })
    }
  }
}

export default badges
