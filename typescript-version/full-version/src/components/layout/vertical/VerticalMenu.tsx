'use client'

// Next Imports
import { usePathname, useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu-package/components/vertical-menu/Menu'
import type { Dictionary } from '@core/types'

// Component Imports from @menu-package
import { Menu } from '@menu-package/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

// Util Imports
import { getLocale } from '@/utils/get-locale'

import { generateVerticalMenu } from '@/utils/menuUtils'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu-package/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

// Menu Data Imports
import menuData from '@/data/navigation/verticalMenuData'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary }: { dictionary: Dictionary }) => {
  // Hooks
  const theme = useTheme()
  const pathName = usePathname()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  const { transitionDuration } = verticalNavOptions

  // Get locale from pathname
  const locale = getLocale(pathName)

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? { className: 'bs-full overflow-y-auto overflow-x-hidden' }
        : { options: { wheelPropagation: false, suppressScrollX: true } })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}

      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {generateVerticalMenu(menuData(dictionary, params), locale)}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
