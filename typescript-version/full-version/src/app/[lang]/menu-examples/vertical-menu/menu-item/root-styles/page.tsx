'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu-package/vertical-menu'

// Util imports
import { menuClasses } from '@menu-package/utils/menuClasses'

const RootStyles = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        <MenuItem
          rootStyles={{
            ['.' + menuClasses.button]: {
              backgroundColor: '#f1f1f1',
              color: '#9f0099'
            }
          }}
        >
          Analytics Dashboard
        </MenuItem>
        <MenuItem>Calendar</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Form Layout</MenuItem>
        <MenuItem>Documentation</MenuItem>
      </Menu>
    </VerticalNav>
  )
}

export default RootStyles
