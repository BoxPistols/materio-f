// MUI Imports
import type { Theme } from '@mui/material/styles'

const tooltip: Theme['components'] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
        lineHeight: 1.273,
        color: 'var(--mui-palette-customColors-tooltipText)'
      }
    }
  }
}

export default tooltip
