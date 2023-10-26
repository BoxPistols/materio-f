// MUI Imports
import type { Theme } from '@mui/material/styles'

const tabs: Theme['components'] = {
  MuiTabs: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        minBlockSize: 38,
        ...(ownerState.orientation === 'horizontal'
          ? {
              borderBlockEnd: '1px solid var(--mui-palette-divider)'
            }
          : {
              borderInlineEnd: '1px solid var(--mui-palette-divider)'
            }),
        '& .MuiTab-root:hover': {
          ...(ownerState.orientation === 'horizontal'
            ? {
                paddingBlockEnd: theme.spacing(1.75),
                ...(ownerState.textColor === 'secondary'
                  ? {
                      color: 'var(--mui-palette-secondary-main)',
                      borderBlockEnd: '2px solid var(--mui-palette-secondary-mainOpacity)'
                    }
                  : {
                      color: 'var(--mui-palette-primary-main)',
                      borderBlockEnd: '2px solid var(--mui-palette-primary-mainOpacity)'
                    })
              }
            : {
                paddingInlineEnd: theme.spacing(5),
                ...(ownerState.textColor === 'secondary'
                  ? {
                      color: 'var(--mui-palette-secondary-main)',
                      borderInlineEnd: '2px solid var(--mui-palette-secondary-mainOpacity)'
                    }
                  : {
                      color: 'var(--mui-palette-primary-main)',
                      borderInlineEnd: '2px solid var(--mui-palette-primary-mainOpacity)'
                    })
              })
        }
      }),
      vertical: {
        minWidth: 131,
        '& .MuiTab-root': {
          minWidth: 130
        }
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        lineHeight: 1.429,
        padding: theme.spacing(2.25, 5.5),
        minBlockSize: 38,
        color: 'var(--mui-palette-text-primary)',
        '& > .MuiTab-iconWrapper': {
          fontSize: '1.125rem',
          ...(ownerState.iconPosition === 'start' && {
            marginInlineEnd: theme.spacing(1.5)
          }),
          ...(ownerState.iconPosition === 'end' && {
            marginInlineStart: theme.spacing(1.5)
          })
        }
      })
    }
  }
}

export default tabs
