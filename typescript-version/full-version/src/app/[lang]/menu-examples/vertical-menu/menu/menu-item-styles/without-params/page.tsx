'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu-package/vertical-menu'

const MenuItemStyles = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu
        menuItemStyles={{
          button: {
            color: '#ff0000',
            fontSize: '1.2rem',
            paddingBlock: '12px',
            fontWeight: 500
          }
        }}
      >
        <MenuSection label='Dashboards & Apps'>
          <SubMenu icon={<>🔥</>} label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem icon={<>🔥</>}>Calendar</MenuItem>
        </MenuSection>
        <MenuSection label='Others'>
          <MenuItem icon={<>🔥</>}>FAQ</MenuItem>
          <SubMenu icon={<>🔥</>} label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem icon={<>🔥</>}>Documentation</MenuItem>
        </MenuSection>
      </Menu>
    </VerticalNav>
  )
}

export default MenuItemStyles
