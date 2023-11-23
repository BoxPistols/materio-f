// MUI Imports
import type { Theme } from '@mui/material/styles'

const timeline: Theme['components'] = {
  MuiTimelineDot: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        '& > svg': {
          fontSize: '1.25rem'
        },
        '&:has(svg)': {
          width: 32,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    },
    variants: [
      {
        props: { variant: 'filled', color: 'primary' },
        style: {
          boxShadow: '0 0 0 3px var(--mui-palette-primary-mainOpacity)'
        }
      },
      {
        props: { variant: 'filled', color: 'secondary' },
        style: {
          boxShadow: '0 0 0 3px var(--mui-palette-secondary-mainOpacity)'
        }
      },
      {
        props: { variant: 'filled', color: 'error' },
        style: {
          boxShadow: '0 0 0 3px var(--mui-palette-error-mainOpacity)'
        }
      },
      {
        props: { variant: 'filled', color: 'warning' },
        style: {
          boxShadow: '0 0 0 3px var(--mui-palette-warning-mainOpacity)'
        }
      },
      {
        props: { variant: 'filled', color: 'info' },
        style: {
          boxShadow: '0 0 0 3px var(--mui-palette-info-mainOpacity)'
        }
      },
      {
        props: { variant: 'filled', color: 'success' },
        style: {
          boxShadow: '0 0 0 3px var(--mui-palette-success-mainOpacity)'
        }
      },
      {
        props: { variant: 'tonal' },
        style: {
          border: 0
        }
      },
      {
        props: { variant: 'tonal', color: 'primary' },
        style: {
          backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
          color: 'var(--mui-palette-primary-main)'
        }
      },
      {
        props: { variant: 'tonal', color: 'secondary' },
        style: {
          backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
          color: 'var(--mui-palette-secondary-main)'
        }
      },
      {
        props: { variant: 'tonal', color: 'error' },
        style: {
          backgroundColor: 'var(--mui-palette-error-lightOpacity)',
          color: 'var(--mui-palette-error-main)'
        }
      },
      {
        props: { variant: 'tonal', color: 'warning' },
        style: {
          backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
          color: 'var(--mui-palette-warning-main)'
        }
      },
      {
        props: { variant: 'tonal', color: 'info' },
        style: {
          backgroundColor: 'var(--mui-palette-info-lightOpacity)',
          color: 'var(--mui-palette-info-main)'
        }
      },
      {
        props: { variant: 'tonal', color: 'success' },
        style: {
          backgroundColor: 'var(--mui-palette-success-lightOpacity)',
          color: 'var(--mui-palette-success-main)'
        }
      }
    ]
  },
  MuiTimelineConnector: {
    styleOverrides: {
      root: {
        width: 1
      }
    }
  }
}

export default timeline
