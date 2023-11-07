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
      bodyBg: string
      chatBg: string
      greyLightBg: string
      inputBorder: string
      tableHeaderBg: string
      tooltipText: string
      trackBg: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      bodyBg?: string
      chatBg?: string
      greyLightBg?: string
      inputBorder?: string
      tableHeaderBg?: string
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

declare module '@mui/material/Pagination' {
  interface PaginationPropsVariantOverrides {
    tonal: true
  }
}

declare module '@mui/lab/TimelineDot' {
  interface TimelineDotPropsVariantOverrides {
    tonal: true
  }
}

export {}
