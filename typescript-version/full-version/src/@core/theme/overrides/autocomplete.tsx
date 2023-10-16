// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Skin } from '@core/types'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const iconStyles = {
  color: 'var(--mui-palette-text-primary)',
  width: '1.25rem',
  height: '1.25rem'
}

const autocomplete = (skin: Skin): Theme['components'] => ({
  MuiAutocomplete: {
    defaultProps: {
      ...(skin === 'bordered' && {
        slotProps: {
          paper: {
            variant: 'outlined'
          }
        }
      }),
      ChipProps: {
        size: 'small'
      },
      popupIcon: <Icon icon='mdi:chevron-down' />
    },
    styleOverrides: {
      root: {
        '& .MuiButtonBase-root.Mui-disabled svg': {
          color: 'var(--mui-palette-action-disabled)'
        },
        '& .MuiChip-root svg': {
          color: 'var(--mui-palette-action-active)'
        },
        '& .MuiOutlinedInput-input': {
          height: '1.4375em'
        }
      },
      input: {
        '& + .MuiAutocomplete-endAdornment': {
          right: '1rem',
          '& svg': {
            ...iconStyles
          }
        }
      },
      paper: {
        ...(skin !== 'bordered' && {
          boxShadow: 'var(--mui-customShadows-lg)'
        })
      },
      listbox: ({ theme }) => ({
        '& .MuiAutocomplete-option': {
          paddingBlock: theme.spacing(2),
          '&[aria-selected="true"]': {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)',
            '&.Mui-focusVisible': {
              backgroundColor:
                'rgb(var(--mui-palette-primary-mainChannel) / calc(var(--mui-palette-action-selectedOpacity) + var(--mui-palette-action-hoverOpacity)))'
            }
          }
        },
        '& .MuiAutocomplete-option.Mui-focusVisible': {
          backgroundColor: 'var(--mui-palette-action-hover)'
        }
      })
    }
  }
})

export default autocomplete
