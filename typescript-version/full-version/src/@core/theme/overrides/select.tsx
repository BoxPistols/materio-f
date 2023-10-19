// React Imports
import React from 'react'

// MUI Imports
import type { Theme } from '@mui/material/styles'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

const SelectIcon = () => {
  return <Icon icon='mdi:chevron-down' />
}

const iconStyles = (theme: Theme) => ({
  userSelect: 'none',
  width: '1.25rem',
  height: '1.25rem',
  display: 'inline-block',
  flexShrink: 0,
  transition: theme.transitions.create('fill', {
    duration: theme.transitions.duration.shorter
  }),
  fontSize: '1.5rem',
  position: 'absolute',
  right: '1rem',
  top: 'calc(50% - 0.6rem)',
  pointerEvents: 'none'
})

const select: Theme['components'] = {
  MuiSelect: {
    defaultProps: {
      IconComponent: SelectIcon
    },
    styleOverrides: {
      select: ({ theme }) => ({
        '&[aria-expanded="true"] ~ svg': {
          transform: 'rotate(180deg)'
        },
        '& ~ svg': iconStyles(theme as Theme),
        minHeight: '1.5em'
      })
    }
  },
  MuiNativeSelect: {
    styleOverrides: {
      select: ({ theme }) => ({
        '& + svg': iconStyles(theme as Theme)
      })
    }
  }
}

export default select
