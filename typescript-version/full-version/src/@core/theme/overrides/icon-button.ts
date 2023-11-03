// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const iconButton: Theme['components'] = {
  MuiIconButton: {
    styleOverrides: {
      sizeSmall: ({ theme }) => ({
        padding: theme.spacing(1),
        fontSize: '1.25rem'
      }),
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(2.25),
        fontSize: '2rem'
      })
    },
    variants: [
      {
        props: { color: 'default' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible:not(.Mui-disabled)': {
              backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
            }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-action-active)'
          }
        }
      },
      {
        props: { color: 'primary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-primary-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { color: 'secondary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-secondary-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-secondary-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { color: 'error' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-error-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-error-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { color: 'warning' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-warning-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-warning-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { color: 'info' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-info-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-info-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { color: 'success' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-success-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible:not(.Mui-disabled)': { backgroundColor: 'var(--mui-palette-success-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-success-main)'
          }
        }
      }
    ]
  }
}

export default iconButton