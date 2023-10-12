declare module '@mui/material/styles' {
  // eslint-disable-next-line lines-around-comment
  // Theme
  interface Theme {
    customShadows: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    shape: {
      borderRadius: number
      customBorderRadius: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
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
    shape?: {
      borderRadius?: number
      customBorderRadius?: {
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
      }
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
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    tonal: true
  }
}

export {}
