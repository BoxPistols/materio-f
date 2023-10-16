// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const alerts: Theme['components'] = {
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        error: <Icon icon='mdi:alert-circle-outline' />,
        warning: <Icon icon='mdi:alert-outline' />,
        info: <Icon icon='mdi:information-outline' />,
        success: <Icon icon='mdi:check-circle-outline' />
      }
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(4),
        gap: theme.spacing(4),
        '&:not(:has(.MuiAlertTitle-root))': {
          fontSize: theme.typography.body1.fontSize,
          fontWeight: 500,
          lineHeight: 1.375,
          '& .MuiAlert-icon + .MuiAlert-message': {
            alignSelf: 'center'
          }
        },
        '&:has(.MuiAlertTitle-root)': {
          fontWeight: 400
        }
      }),
      icon: {
        padding: 0,
        margin: 0,
        width: 30,
        height: 30,
        borderRadius: 'var(--mui-shape-borderRadius)',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          fontSize: 'inherit'
        }
      },
      message: {
        padding: 0
      },
      action: {
        padding: 0,
        marginRight: 0
      }
    },
    variants: [
      {
        props: { variant: 'standard', severity: 'error' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-error-main)',
            color: 'var(--mui-palette-error-contrastText)'
          }
        }
      },
      {
        props: { variant: 'standard', severity: 'warning' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-warning-main)',
            color: 'var(--mui-palette-warning-contrastText)'
          }
        }
      },
      {
        props: { variant: 'standard', severity: 'info' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-info-main)',
            color: 'var(--mui-palette-info-contrastText)'
          }
        }
      },
      {
        props: { variant: 'standard', severity: 'success' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-success-main)',
            color: 'var(--mui-palette-success-contrastText)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'error' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-error-mainOpacity)',
            color: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'warning' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-warning-mainOpacity)',
            color: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'info' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-info-mainOpacity)',
            color: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', severity: 'success' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-success-mainOpacity)',
            color: 'var(--mui-palette-success-main)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'error' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-error-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'warning' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-warning-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'info' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-info-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      },
      {
        props: { variant: 'filled', severity: 'success' },
        style: {
          '& .MuiAlert-icon': {
            backgroundColor: 'var(--mui-palette-common-white)',
            color: 'var(--mui-palette-success-main)',
            boxShadow: 'var(--mui-customShadows-xs)'
          }
        }
      }
    ]
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.typography.body1.fontSize,
        fontWeight: 500,
        lineHeight: 1.375,
        marginTop: 0,
        marginBottom: theme.spacing(1)
      })
    }
  }
}

export default alerts
