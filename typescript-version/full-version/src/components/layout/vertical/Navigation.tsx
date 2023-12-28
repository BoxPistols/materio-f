'use client'

// MUI Imports
import { useColorScheme, useTheme } from '@mui/material/styles'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { Dictionary, Mode, Skin, SystemMode } from '@core/types'

// Component Imports from @menu-package
import VerticalNav, { NavHeader, NavCollapseIcons } from '@menu-package/vertical-menu'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import VerticalMenu from './VerticalMenu'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Style Imports
import navigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'

type Props = {
  settingsCookie: Settings
  dictionary: Dictionary
  mode: Mode
  systemMode: SystemMode
  skin: Skin
}

const Navigation = (props: Props) => {
  // Props
  const { settingsCookie, dictionary, mode, systemMode, skin } = props

  // Hooks
  const verticalNavOptions = useVerticalNav()
  const { settings } = useSettings()
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme()
  const theme = useTheme()

  const { isCollapsed, isHovered } = verticalNavOptions
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
      <VerticalMenu dictionary={dictionary} />
    </VerticalNav>
  )
}

export default Navigation
