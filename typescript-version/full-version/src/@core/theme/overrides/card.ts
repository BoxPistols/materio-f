// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const card = (skin: Skin): Theme['components'] => {
  return {
    MuiCard: {
      defaultProps: {
        ...(skin === 'bordered' && {
          variant: 'outlined'
        })
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant !== 'outlined' && {
            boxShadow: 'var(--mui-customShadows-md)'
          })
        })
      }
    },
    MuiCardHeader: {
      defaultProps: {
        subheaderTypographyProps: {
          variant: 'subtitle1'
        }
      },
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& + .MuiCardContent-root, & + .MuiCardActions-root': {
            paddingBlockStart: 0
          },
          '& + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
            {
              paddingBlockStart: 0
            }
        }),
        subheader: ({ theme }) => ({
          marginBlockStart: theme.spacing(0.5)
        }),
        action: ({ theme }) => ({
          ...theme.typography.body1,
          color: 'var(--mui-palette-text-disabled)',
          marginBlock: 0,
          marginInlineEnd: 0,
          '& .MuiIconButton-root': {
            color: 'inherit'
          }
        })
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          color: 'var(--mui-palette-text-secondary)',
          '&:last-child': {
            paddingBlockEnd: theme.spacing(5)
          },
          '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
            paddingBlockStart: 0
          },
          '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
            {
              paddingBlockStart: 0
            },
          '& > .MuiTabPanel-root': {
            paddingInline: 0,
            paddingBlockEnd: 0,
            '&:first-of-type': {
              paddingBlockStart: 0,
              '& + .MuiTabPanel-root': {
                paddingBlockStart: 0
              }
            }
          }
        })
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '&:where(.card-actions-dense)': {
            padding: theme.spacing(2.5),
            '& .MuiButton-text': {
              paddingInline: theme.spacing(2.5)
            }
          },
          '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
            paddingBlockStart: 0
          },
          '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child':
            {
              paddingBlockStart: 0
            }
        })
      }
    }
  }
}

export default card
