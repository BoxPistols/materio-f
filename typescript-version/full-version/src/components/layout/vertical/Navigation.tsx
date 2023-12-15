'use client'

// MUI Imports
import { useColorScheme, useTheme } from '@mui/material/styles'

// Type Imports
import type { Dictionary, Skin } from '@core/types'

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
import commonStyles from '@/styles/common.module.css'

const Navigation = ({ dictionary }: { dictionary: Dictionary }) => {
  // Hooks
  const verticalNavOptions = useVerticalNav()
  const { settings, updateSettings } = useSettings()
  const { mode, systemMode } = useColorScheme()
  const theme = useTheme()

  const { isCollapsed, isHovered } = verticalNavOptions
  const { skin, semiDark } = settings

  const handleClick = () => {
    if (isCollapsed) {
      updateSettings({ layout: 'vertical' })
    } else {
      updateSettings({ layout: 'collapsed' })
    }
  }

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      customStyles={navigationCustomStyles(verticalNavOptions, theme, skin as Skin)}
      collapsedWidth={68}
      backgroundColor={
        skin === 'bordered' ? 'var(--mui-palette-background-paper)' : 'var(--mui-palette-background-default)'
      }
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(semiDark &&
        (mode === 'light' || systemMode === 'light') && {
          'data-mui-color-scheme': 'dark'
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Logo />
        {!(isCollapsed && !isHovered) && (
          <NavCollapseIcons
            onClick={handleClick}
            lockedIcon={<i className='ri-radio-button-line text-xl' />}
            unlockedIcon={<i className='ri-checkbox-blank-circle-line text-xl' />}
            closeIcon={<i className='ri-close-line text-xl' />}
            className={commonStyles.textSecondary}
          />
        )}
      </NavHeader>
      <VerticalMenu dictionary={dictionary} />
    </VerticalNav>
  )
}

export default Navigation
