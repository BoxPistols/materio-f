// MUI Imports
import type { Theme } from '@mui/material/styles'

const breadcrumbs: Theme['components'] = {
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        '& svg': {
          fontSize: '1.25rem'
        },
        '& a': {
          textDecoration: 'none',
          color: 'var(--mui-palette-text-secondary)',
          '&:hover': {
            color: 'var(--mui-palette-text-primary)'
          }
        }
      },
      li: {
        lineHeight: 1.5,
        color: 'var(--mui-palette-text-primary)'
      }
    }
  }
}

export default breadcrumbs