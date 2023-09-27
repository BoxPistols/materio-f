// MUI Imports
import type { Theme } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'

// Type Imports
import type { MainColor } from '@core/types'

const customShadows = (mode: PaletteMode, mainColors: MainColor): Theme['customShadows'] => {
  const mainLightColor = mainColors.lightShadow
  const mainDarkColor = mainColors.darkShadow

  return mode === 'light'
    ? {
        xs: `0px 2px 4px 0px rgb(${mainLightColor} / 0.14)`,
        sm: `0px 2px 8px 0px rgb(${mainLightColor} / 0.16)`,
        md: `0px 4px 12px 0px rgb(${mainLightColor} / 0.16)`,
        lg: `0px 6px 18px 0px rgb(${mainLightColor} / 0.18)`,
        xl: `0px 8px 24px 0px rgb(${mainLightColor} / 0.2)`
      }
    : {
        xs: `0px 2px 4px 0px rgb(${mainDarkColor} / 0.18)`,
        sm: `0px 2px 8px 0px rgb(${mainDarkColor} / 0.22)`,
        md: `0px 4px 12px 0px rgb(${mainDarkColor} / 0.24)`,
        lg: `0px 6px 18px 0px rgb(${mainDarkColor} / 0.26)`,
        xl: `0px 8px 28px 0px rgb(${mainDarkColor} / 0.28)`
      }
}

export default customShadows
