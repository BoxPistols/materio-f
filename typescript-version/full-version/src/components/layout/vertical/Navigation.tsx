'use client'

// React Imports
import { useRef } from 'react'

// MUI Imports
import { styled, useColorScheme, useTheme } from '@mui/material/styles'

// Type Imports
import Logo from '@components/layout/shared/Logo'

import type { getDictionary } from '@/utils/get-dictionary'
import type { Settings } from '@core/contexts/settingsContext'
import type { Mode, Skin, SystemMode } from '@core/types'

// Component Imports
import VerticalNav, { NavHeader, NavCollapseIcons } from '@menu/vertical-menu'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Style Imports
import navigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'

type Props = {
  settingsCookie: Settings
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  mode: Mode
  systemMode: SystemMode
  skin: Skin
}

const StyledBoxForShadow = styled('div')(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  background: `linear-gradient(var(--mui-palette-background-default) ${
    theme.direction === 'rtl' ? '95%' : '5%'
  }, rgb(var(--mui-palette-background-defaultChannel) / 0.85) 30%, rgb(var(--mui-palette-background-defaultChannel) / 0.5) 65%, rgb(var(--mui-palette-background-defaultChannel) / 0.3) 75%, transparent)`,
  '&.scrolled': {
    opacity: 1
  }
}))

const Navigation = (props: Props) => {
  // Props
  const { settingsCookie, dictionary, mode, systemMode, skin } = props

  // Hooks
  const verticalNavOptions = useVerticalNav()
  const { settings } = useSettings()
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme()
  const theme = useTheme()

  // Refs
  const shadowRef = useRef(null)

  const { isCollapsed, isHovered, isBreakpointReached } = verticalNavOptions
  const isServer = typeof window === 'undefined'

  let isSemiDark, isDark, isSkinBordered

  if (isServer) {
    isSemiDark = settingsCookie.semiDark || false
    isDark = mode === 'system' ? systemMode === 'dark' : mode === 'dark'
    isSkinBordered = skin === 'bordered'
  } else {
    isSemiDark = settings.semiDark
    isDark = muiMode === 'system' ? muiSystemMode === 'dark' : muiMode === 'dark'
    isSkinBordered = settings.skin === 'bordered'
  }

  const scrollMenu = (container: any, isPerfectScrollbar: boolean) => {
    container = isBreakpointReached || !isPerfectScrollbar ? container.target : container

    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('scrolled')) {
        // @ts-ignore
        shadowRef.current.classList.add('scrolled')
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('scrolled')
    }
  }

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      customStyles={navigationCustomStyles(verticalNavOptions, theme)}
      collapsedWidth={68}
      backgroundColor={isSkinBordered ? 'var(--mui-palette-background-paper)' : 'var(--mui-palette-background-default)'}
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(isSemiDark &&
        !isDark && {
          'data-mui-color-scheme': 'dark'
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Logo />
        {!(isCollapsed && !isHovered) && (
          <NavCollapseIcons
            lockedIcon={<i className='ri-radio-button-line text-xl' />}
            unlockedIcon={<i className='ri-checkbox-blank-circle-line text-xl' />}
            closeIcon={<i className='ri-close-line text-xl' />}
            className='text-textSecondary'
          />
        )}
      </NavHeader>
      <StyledBoxForShadow ref={shadowRef} />
      <VerticalMenu dictionary={dictionary} scrollMenu={scrollMenu} />
    </VerticalNav>
  )
}

export default Navigation
