// Type Imports
import type {
  VerticalMenuDataType,
  VerticalSectionDataType,
  VerticalSubMenuDataType,
  VerticalMenuItemDataType,
  HorizontalMenuDataType,
  HorizontalSubMenuDataType,
  HorizontalMenuItemDataType
} from '../types/menuTypes'

// Component Imports
import { SubMenu as HorizontalSubMenu, MenuItem as HorizontalMenuItem } from '../@menu-package/horizontal-menu'
import { SubMenu as VerticalSubMenu, MenuItem as VerticalMenuItem, MenuSection } from '../@menu-package/vertical-menu'

// Generate a menu from the menu data array
export const generateVerticalMenu = (menuData: VerticalMenuDataType[]) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: VerticalMenuDataType, index) => {
    const menuSectionItem = item as VerticalSectionDataType
    const subMenuItem = item as VerticalSubMenuDataType
    const menuItem = item as VerticalMenuItemDataType

    // Check if the current item is a section
    if (menuSectionItem.isSection) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { children, isSection, ...rest } = menuSectionItem

      // If it is, return a MenuSection component and call generateVerticalMenu with the current menuSectionItem's children
      return (
        <MenuSection key={index} {...rest}>
          {children && generateVerticalMenu(children)}
        </MenuSection>
      )
    }

    // Check if the current item is a sub menu
    if (subMenuItem.children) {
      const { children, ...rest } = subMenuItem

      // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
      return (
        <VerticalSubMenu key={index} {...rest}>
          {children && generateVerticalMenu(children)}
        </VerticalSubMenu>
      )
    }

    // If the current item is neither a section nor a sub menu, return a MenuItem component
    return (
      <VerticalMenuItem key={index} {...menuItem}>
        {menuItem.label}
      </VerticalMenuItem>
    )
  })
}

// Generate a menu from the menu data array
export const generateHorizontalMenu = (menuData: HorizontalMenuDataType[]) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: HorizontalMenuDataType, index) => {
    const subMenuItem = item as HorizontalSubMenuDataType
    const menuItem = item as HorizontalMenuItemDataType

    // Check if the current item is a sub menu
    if (subMenuItem.children) {
      const { children, ...rest } = subMenuItem

      // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
      return (
        <HorizontalSubMenu key={index} {...rest}>
          {children && generateHorizontalMenu(children)}
        </HorizontalSubMenu>
      )
    }

    // If the current item is neither a section nor a sub menu, return a MenuItem component
    return (
      <HorizontalMenuItem key={index} {...menuItem}>
        {menuItem.label}
      </HorizontalMenuItem>
    )
  })
}