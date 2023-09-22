'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu-package/vertical-menu'

const OnActiveChange = () => {
  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <MenuItem href='/menu-examples/vertical-menu/menu-item/on-active-change/without-params'>
            Analytics Dashboard
          </MenuItem>
          <MenuItem
            href='/menu-examples/vertical-menu/menu-item/on-active-change/without-params/inside'
            onActiveChange={() => {
              console.log('onActiveChange called')
            }}
          >
            Calendar
          </MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Form Layout</MenuItem>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </VerticalNav>
      <main className='p-4 flex-grow'>
        <p>Toggle between first two items to see the console logs</p>
      </main>
    </div>
  )
}

export default OnActiveChange
