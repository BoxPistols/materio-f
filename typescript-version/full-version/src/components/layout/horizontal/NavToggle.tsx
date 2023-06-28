'use client'

// Hook Imports
import useVerticalNav from '../../../@menu-package/hooks/useVerticalNav'
import useHorizontalNav from '../../../@menu-package/hooks/useHorizontalNav'

// Icon Imports
import HamburgerMenuIcon from '../../../@layouts/svg/HamburgerMenu'

const NavToggle = () => {
  // Hooks
  const { toggleVerticalNav } = useVerticalNav()
  const { isBreakpointReached } = useHorizontalNav()

  // Toggle Vertical Nav
  const handleClick = () => {
    toggleVerticalNav()
  }

  return (
    <>
      {/* <span style={{ display: 'flex' }}>
        <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} />
      </span> */}
      {/* Comment following line and uncomment this line in order to toggle menu on desktop screens as well */}
      {isBreakpointReached && (
        <span style={{ display: 'flex' }}>
          <HamburgerMenuIcon fontSize='1.25rem' onClick={handleClick} />
        </span>
      )}
    </>
  )
}

export default NavToggle