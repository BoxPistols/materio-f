// React Imports
import React from 'react'

// MUI Imports
import MuiBadge from '@mui/material/Badge'
import type { BadgeProps } from '@mui/material/Badge'

export type CustomBadgeProps = BadgeProps & {
  tonal?: boolean
}

const getBadgeStyles = (tonal: CustomBadgeProps['tonal'], color: NonNullable<CustomBadgeProps['color']>) => {
  let badgeStyles: BadgeProps['sx'] = {}

  if (tonal && color !== 'default') {
    badgeStyles = {
      '& .MuiBadge-badge.MuiBadge-standard': {
        color: `var(--mui-palette-${color}-main)`,
        backgroundColor: `rgb(var(--mui-palette-${color}-lightChannel) / 0.08)`
      }
    }
  }

  return badgeStyles
}

const CustomBadge = (props: CustomBadgeProps) => {
  // Props
  const { sx, tonal, color = 'primary', ...rest } = props

  return <MuiBadge {...rest} color={color} sx={tonal ? Object.assign(getBadgeStyles(tonal, color), sx) : sx} />
}

export default CustomBadge
