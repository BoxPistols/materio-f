// MUI Imports
import type { Theme } from '@mui/material/styles'

// Config Imports
import themeConfig from '@configs/themeConfig'

const iconStyles = (size?: string) => ({
  '& > *:nth-of-type(1)': {
    ...(size === 'small'
      ? {
          fontSize: '14px'
        }
      : {
          ...(size === 'medium'
            ? {
                fontSize: '16px'
              }
            : {
                fontSize: '20px'
              })
        })
  }
})

const button: Theme['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: themeConfig.disableRipple
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.variant === 'text'
          ? {
              ...(ownerState.size === 'small' && {
                padding: theme.spacing(2, 2.5)
              }),
              ...(ownerState.size === 'medium' && {
                padding: theme.spacing(2.25, 3.5)
              }),
              ...(ownerState.size === 'large' && {
                padding: theme.spacing(2.5, 4.5)
              })
            }
          : {
              ...(ownerState.variant === 'outlined'
                ? {
                    ...(ownerState.size === 'small' && {
                      padding: theme.spacing(1.75, 3.25)
                    }),
                    ...(ownerState.size === 'medium' && {
                      padding: theme.spacing(2, 4.25)
                    }),
                    ...(ownerState.size === 'large' && {
                      padding: theme.spacing(2.25, 5.25)
                    })
                  }
                : {
                    ...(ownerState.size === 'small' && {
                      padding: theme.spacing(2, 3.5)
                    }),
                    ...(ownerState.size === 'medium' && {
                      padding: theme.spacing(2.25, 4.5)
                    }),
                    ...(ownerState.size === 'large' && {
                      padding: theme.spacing(2.5, 5.5)
                    })
                  })
            })
      }),
      contained: ({ ownerState }) => ({
        boxShadow: 'var(--mui-customShadows-xs)',
        ...(!ownerState.disabled && {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: 'var(--mui-customShadows-xs)'
          },
          '&:active': {
            boxShadow: 'none'
          }
        })
      }),
      sizeSmall: {
        lineHeight: 1.23077,
        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
      },
      sizeLarge: {
        lineHeight: 1.6,
        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
      },
      startIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineEnd: theme.spacing(1.5)
            }
          : {
              ...(ownerState.size === 'medium'
                ? {
                    marginInlineEnd: theme.spacing(2)
                  }
                : {
                    marginInlineEnd: theme.spacing(2.5)
                  })
            }),
        ...iconStyles(ownerState.size)
      }),
      endIcon: ({ theme, ownerState }) => ({
        ...(ownerState.size === 'small'
          ? {
              marginInlineStart: theme.spacing(1.5)
            }
          : {
              ...(ownerState.size === 'medium'
                ? {
                    marginInlineStart: theme.spacing(2)
                  }
                : {
                    marginInlineStart: theme.spacing(2.5)
                  })
            }),
        ...iconStyles(ownerState.size)
      })
    },
    variants: [
      {
        props: { variant: 'text', color: 'primary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-primary-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'secondary' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-secondary-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-secondary-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'error' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-error-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-error-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'warning' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-warning-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-warning-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'info' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-info-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-info-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'text', color: 'success' },
        style: {
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-success-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-success-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-success-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          borderColor: 'var(--mui-palette-primary-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-primary-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-main)',
            borderColor: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'secondary' },
        style: {
          borderColor: 'var(--mui-palette-secondary-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-secondary-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-secondary-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-secondary-main)',
            borderColor: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'error' },
        style: {
          borderColor: 'var(--mui-palette-error-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-error-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-error-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-error-main)',
            borderColor: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'warning' },
        style: {
          borderColor: 'var(--mui-palette-warning-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-warning-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-warning-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-warning-main)',
            borderColor: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'info' },
        style: {
          borderColor: 'var(--mui-palette-info-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-info-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-info-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-info-main)',
            borderColor: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'outlined', color: 'success' },
        style: {
          borderColor: 'var(--mui-palette-success-main)',
          '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
            backgroundColor: 'var(--mui-palette-success-lightOpacity)'
          },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-success-lightOpacity)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-success-main)',
            borderColor: 'var(--mui-palette-success-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          '&:active': { backgroundColor: 'var(--mui-palette-primary-dark)' },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-primary-dark)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-primary-contrastText)',
            backgroundColor: 'var(--mui-palette-primary-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          '&:active': { backgroundColor: 'var(--mui-palette-secondary-dark)' },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-secondary-dark)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-secondary-contrastText)',
            backgroundColor: 'var(--mui-palette-secondary-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'error' },
        style: {
          '&:active': { backgroundColor: 'var(--mui-palette-error-dark)' },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-error-dark)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-error-contrastText)',
            backgroundColor: 'var(--mui-palette-error-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'warning' },
        style: {
          '&:active': { backgroundColor: 'var(--mui-palette-warning-dark)' },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-warning-dark)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-warning-contrastText)',
            backgroundColor: 'var(--mui-palette-warning-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'info' },
        style: {
          '&:active': { backgroundColor: 'var(--mui-palette-info-dark)' },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-info-dark)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-info-contrastText)',
            backgroundColor: 'var(--mui-palette-info-main)'
          }
        }
      },
      {
        props: { variant: 'contained', color: 'success' },
        style: {
          '&:active': { backgroundColor: 'var(--mui-palette-success-dark)' },
          ...(themeConfig.disableRipple && {
            '&.Mui-focusVisible': { backgroundColor: 'var(--mui-palette-success-dark)' }
          }),
          '&.Mui-disabled': {
            opacity: 0.45,
            color: 'var(--mui-palette-success-contrastText)',
            backgroundColor: 'var(--mui-palette-success-main)'
          }
        }
      }
    ]
  }
}

export default button
