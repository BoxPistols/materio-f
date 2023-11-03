'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu-package/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

const ToggleFunction = () => {
  // Hooks
  const { toggleVerticalNav, isToggled } = useVerticalNav()

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </VerticalNav>
      <main className='p-4 flex-grow'>
        <button onClick={() => toggleVerticalNav(!isToggled)} className='cursor-pointer'>
          Click here to toggle menu
        </button>
      </main>
    </div>
  )
}

export default ToggleFunction