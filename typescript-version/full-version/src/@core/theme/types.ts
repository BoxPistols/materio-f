declare module '@mui/material/styles' {
  interface PalettePaperChannel {
    paperChannel: string
  }
  interface TypeBackground extends PalettePaperChannel {}
  // eslint-disable-next-line lines-around-comment
  // Theme
  interface Theme {
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
    customShadows: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    mainColorChannels: {
      light: string
      dark: string
      lightShadow: string
      darkShadow: string
    }
  }
  interface ThemeOptions {
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
    customShadows?: {
      xs?: string
      sm?: string
      md?: string
      lg?: string
      xl?: string
    }
    mainColorChannels?: {
      light?: string
      dark?: string
      lightShadow?: string
      darkShadow?: string
    }
  }

  // Palette Color
  interface PaletteColor {
    lighterOpacity?: string
    lightOpacity?: string
    mainOpacity?: string
    darkOpacity?: string
    darkerOpacity?: string
  }
  interface SimplePaletteColorOptions {
    lighterOpacity?: string
    lightOpacity?: string
    mainOpacity?: string
    darkOpacity?: string
    darkerOpacity?: string
  }

  // Palette
  interface Palette {
    background: {
      default: string
      paper: string
      defaultChannel: string
      paperChannel: string
    }
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
    background?: {
      default?: string
      paper?: string
      defaultChannel?: string
      paperChannel?: string
    }
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
