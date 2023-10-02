// MUI Imports
import type { Theme, ComponentsOverrides } from '@mui/material/styles'

// Type Imports
import type { CustomInputHorizontalProps, CustomInputVerticalProps, CustomInputImgProps } from '@docComponents/custom-inputs/types'

declare module '@mui/material/styles' {
  // Theme
  interface Theme {
    customShadows: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
  interface ThemeOptions {
    customShadows?: {
      xs?: string
      sm?: string
      md?: string
      lg?: string
      xl?: string
    }
  }

  // Palette Color
  interface PaletteColor {
    mainOpacity?: string
    lightOpacity?: string
    darkOpacity?: string
  }
  interface SimplePaletteColorOptions {
    mainOpacity?: string
    lightOpacity?: string
    darkOpacity?: string
  }

  // Palette
  interface Palette {
    customColors: {
      chatBg: string
      greyLightBg: string
      tableHeaderBg: string
      tooltipBg: string
      tooltipText: string
      trackBg: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      chatBg?: string
      greyLightBg?: string
      tableHeaderBg?: string
      tooltipBg?: string
      tooltipText?: string
      trackBg?: string
    }
  }

  interface ComponentNameToClassKey {
    MuiCustomInputHorizontal: 'root' | 'title' | 'meta' | 'content' | 'input'
    MuiCustomInputVertical: 'root' | 'title' | 'content' | 'input'
    MuiCustomImage: 'root' | 'image' | 'input'
  }

  interface ComponentsPropsList {
    MuiCustomInputHorizontal: CustomInputHorizontalProps
    MuiCustomInputVertical: CustomInputVerticalProps
    MuiCustomImage: CustomInputImgProps
  }

  interface Components {
    MuiCustomInputHorizontal?: {
      defaultProps?: ComponentsPropsList['MuiCustomInputHorizontal']
      styleOverrides?: ComponentsOverrides<Theme>['MuiCustomInputHorizontal']
    },
    MuiCustomInputVertical?: {
      defaultProps?: ComponentsPropsList['MuiCustomInputVertical']
      styleOverrides?: ComponentsOverrides<Theme>['MuiCustomInputVertical']
    },
    MuiCustomImage?: {
      defaultProps?: ComponentsPropsList['MuiCustomImage']
      styleOverrides?: ComponentsOverrides<Theme>['MuiCustomImage']
    }
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    tonal: true
  }
}

export {}
