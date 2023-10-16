// MUI Imports
import { deepmerge } from '@mui/utils'
import type { Theme } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { MainColor, Skin } from '@core/types'

// Theme Options Imports
import overrides from './overrides'
import colorSchemes from './colorSchemes'
import spacing from './spacing'
import shadows from './shadows'
import customShadows from './customShadows'
import typography from './typography'

const theme = (
  settings: Settings,
  mode: PaletteMode,
  direction: Theme['direction'],
  userMainColors: MainColor
): Theme => {
  const mainColors: MainColor = deepmerge(
    {
      light: '58 53 65',
      dark: '231 227 252',
      lightShadow: '58 53 65',
      darkShadow: '19 17 32'
    },
    userMainColors
  )

  return {
    direction,
    components: overrides(settings.skin as Skin),
    colorSchemes: colorSchemes(mainColors),
    ...spacing,
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 5,
        md: 6,
        lg: 8,
        xl: 10
      }
    },
    shadows: shadows(mode, mainColors),
    customShadows: customShadows(mode, mainColors),
    typography
  } as Theme
}

export default theme
