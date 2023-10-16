// MUI Imports
import type { Theme } from '@mui/material/styles'

const input: Theme['components'] = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        '&.MuiInput-underline': {
          '&:before': {
            borderColor: 'var(--mui-palette-customColors-inputBorder)'
          },
          '&:not(.Mui-disabled, .Mui-error):hover:before': {
            borderColor: 'var(--mui-palette-action-active)'
          }
        }
      }
    }
  },
  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        '& .MuiFilledInput-input': {
          paddingInline: theme.spacing(4)
        },
        '&:before': {
          borderBottom: '1px solid var(--mui-palette-text-secondary)'
        },
        '&.Mui-disabled:before': {
          borderBottomStyle: 'solid'
        }
      })
    }
  },
  MuiInputLabel: {
    styleOverrides: {
      shrink: ({ ownerState }) => ({
        ...(ownerState.variant === 'outlined' && {
          color: 'var(--mui-palette-text-secondary)',
          insetBlockStart: 1,
          insetInlineStart: 1
        })
      })
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        '&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--mui-palette-action-active)'
        }
      },
      input: ({ theme, ownerState }) => ({
        ...(ownerState?.size === 'medium' && {
          padding: theme.spacing(4),
          height: '1.5em'
        }),
        '& ~ .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--mui-palette-customColors-inputBorder)'
        }
      })
    }
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        color: 'var(--mui-palette-text-primary)',
        '& svg': {
          fontSize: '1.25rem'
        },
        '& .MuiIconButton-edgeEnd': {
          color: 'var(--mui-palette-text-primary)'
        }
      }
    }
  }
}

export default input
