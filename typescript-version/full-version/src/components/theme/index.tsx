'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// MUI Imports
import { deepmerge } from '@mui/utils'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import type {} from '@mui/lab/themeAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import type { PaletteMode } from '@mui/material'

// Third-party Imports
import { useMedia } from 'react-use'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import EmotionCacheProvider from './EmotionCache'

// Config Imports
import { getPrimaryColorScheme } from '@configs/primaryColorConfig'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

// Core Theme Imports
import defaultCoreTheme from '@core/theme'

const ThemeProvider = ({ children, direction }: { children: ReactNode; direction: Direction }) => {
  // Hooks
  const { settings } = useSettings()
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
  const coreTheme = deepmerge(defaultCoreTheme(settings, mode, direction), getPrimaryColorScheme(settings))
  const theme = extendTheme(coreTheme)

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
