// React Imports
import React from 'react'

// MUI Imports
import MuiAvatar from '@mui/material/Avatar'
import { lighten } from '@mui/material/styles'
import type { AvatarProps } from '@mui/material/Avatar'

// Type Imports
import type { ThemeColor } from '@core/types'

export type CustomAvatarProps = AvatarProps & {
  color?: ThemeColor
  skin?: 'filled' | 'light' | 'light-static'
}

const getAvatarStyles = (skin: CustomAvatarProps['skin'], color: NonNullable<CustomAvatarProps['color']>) => {
  let avatarStyles: AvatarProps['sx']

  if (skin === 'light') {
    avatarStyles = {
      backgroundColor: `var(--mui-palette-${color}-lightOpacity)`,
      color: `var(--mui-palette-${color}-main)`
    }
  } else if (skin === 'light-static') {
    avatarStyles = {
      backgroundColor: theme => lighten(theme.palette[color].main, 0.92),
      color: `var(--mui-palette-${color}-main)`
    }
  } else {
    avatarStyles = {
      backgroundColor: `var(--mui-palette-${color}-main)`,
      color: `var(--mui-palette-${color}-contrastText)`
    }
  }

  return avatarStyles
}

const CustomAvatar = (props: CustomAvatarProps) => {
  // Props
  const { sx, src, skin = 'filled', color = 'primary', ...rest } = props

  return (
    <MuiAvatar {...rest} sx={!src && skin && color ? Object.assign(getAvatarStyles(skin, color), sx) : sx} src={src} />
  )
}

export default CustomAvatar
