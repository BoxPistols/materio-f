// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

const accordion = (skin: Skin): Theme['components'] => ({
  MuiAccordion: {
    defaultProps: {
      ...(skin === 'bordered' && {
        variant: 'outlined'
      })
    },
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create(['margin', 'border-radius', 'box-shadow']),
        ...(skin !== 'bordered'
          ? {
              boxShadow: 'var(--mui-customShadows-xs)'
            }
          : {
              '&:not(.Mui-expanded) + &:not(.Mui-expanded)': {
                borderBlockStart: 0
              }
            }),
        '&:not(.Mui-expanded):has(+ .Mui-expanded)': {
          borderBottomLeftRadius: 'var(--mui-shape-borderRadius)',
          borderBottomRightRadius: 'var(--mui-shape-borderRadius)'
        },
        '&.Mui-expanded': {
          borderRadius: 'var(--mui-shape-borderRadius)',
          ...(skin !== 'bordered' && {
            boxShadow: 'var(--mui-customShadows-md)'
          }),
          margin: theme.spacing(2, 0),
          '& + .MuiAccordion-root': {
            borderTopLeftRadius: 'var(--mui-shape-borderRadius)',
            borderTopRightRadius: 'var(--mui-shape-borderRadius)',
            '&:before': {
              opacity: 0
            }
          }
        }
      })
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3, 5),
        '&.Mui-expanded': {
          minHeight: 48
        }
      }),
      content: {
        margin: '0 !important'
      }
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(5),
        '&:first-of-type': {
          paddingTop: theme.spacing(0)
        }
      })
    }
  }
})

export default accordion
