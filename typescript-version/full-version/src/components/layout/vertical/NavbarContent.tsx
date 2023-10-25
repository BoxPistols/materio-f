// Third-party Imports
import classnames from 'classnames'

// Components Imports
import NavToggle from './NavToggle'
import NavSearch from '@components/layout/shared/search'
import HorizontalMenu from './HorizontalMenu'
import LanguageDropdown from '@components/layout/shared/LanguageDropdown'
import ModeSwitcher from '@layouts/components/ModeSwitcher'
import UserDetails from '@layouts/components/UserDetails'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4'>
        <NavToggle />
        <NavSearch />
        <HorizontalMenu />
      </div>
      <div className='flex items-center gap-4'>
        <LanguageDropdown />
        <ModeSwitcher />
        <UserDetails />
      </div>
    </div>
  )
}

export default NavbarContent
