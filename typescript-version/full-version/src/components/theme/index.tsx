'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// MUI Imports
import { deepmerge } from '@mui/utils'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  responsiveFontSizes
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import type { PaletteMode } from '@mui/material'

// Third-party Imports
import { useMedia } from 'react-use'

// Type Imports
import type { MainColor } from '@core/types'

// Component Imports
import EmotionCacheProvider from './EmotionCache'

// Config Imports
import { getPrimaryColorScheme } from '@configs/primaryColorConfig'
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

// Util Imports
import { getLocale } from '@/utils/get-locale'
import { getDirection } from '@/utils/get-direction'

// Core Theme Imports
import defaultCoreTheme from '@core/theme'

//! Do not remove this variable otherwise you will get an error from the `@core` folder
const mainColors: MainColor = {
  // light: '58 53 65',
  // dark: '231 227 252',
  // lightShadow: '58 53 65',
  // darkShadow: '19 17 32'
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const { settings } = useSettings()
  const pathname = usePathname()
  const locale = getLocale(pathname)
  const direction = getDirection(locale)
  const isPreferredDark = useMedia('(prefers-color-scheme: dark)', false)

  // States
  const [mode, setMode] = useState<PaletteMode>(isPreferredDark || settings.mode === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    if (settings.mode === 'system') {
      setMode(isPreferredDark ? 'dark' : 'light')
    } else {
      setMode(settings.mode as PaletteMode)
    }
  }, [isPreferredDark, settings.mode])

  if (Object.keys(settings).length === 0) {
    return
  }

  // Merge the primary color scheme override with the core theme
  const coreTheme = deepmerge(defaultCoreTheme(settings, mode, direction, mainColors), getPrimaryColorScheme(settings))
  let theme = extendTheme(coreTheme)

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <EmotionCacheProvider options={{ key: 'mui' }} direction={theme.direction}>
      <CssVarsProvider theme={theme} defaultMode={settings.mode}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionCacheProvider>
  )
}

export default ThemeProvider
