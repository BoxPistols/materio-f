// React Imports
import type { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react'

// Third-party Imports
import type { CSSObject } from '@emotion/react'

// Type Imports
import type {
  SubMenuProps as VerticalSubMenuProps,
  MenuItemProps as VerticalMenuItemProps,
  MenuSectionProps as VerticalMenuSectionProps
} from './components/vertical-menu'
import type {
  SubMenuProps as HorizontalSubMenuProps,
  MenuItemProps as HorizontalMenuItemProps
} from './components/horizontal-menu'

export type ChildrenType = {
  children: ReactNode
}

// Breakpoints
export type BreakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always'

// Menu Item Elements for styling
export type MenuItemElement = 'root' | 'button' | 'icon' | 'label' | 'prefix' | 'suffix'

// Sub Menu Item Elements for styling
export type SubMenuItemElement =
  | 'root'
  | 'button'
  | 'label'
  | 'prefix'
  | 'suffix'
  | 'icon'
  | 'subMenuContent'
  | 'subMenuExpandIcon'

// Menu Button Props
export type MenuButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  Partial<ChildrenType> & {
    component?: string | ReactElement
  }

// Menu Item Styles Params Type
export type MenuItemStylesParams = {
  level: number
  disabled: boolean
  active?: boolean
  isSubmenu: boolean
  open?: boolean
}

// Menu Item Style Elements Type
export type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined)

// Menu Item Styles Type
export type MenuItemStyles = {
  root?: ElementStyles
  button?: ElementStyles
  label?: ElementStyles
  prefix?: ElementStyles
  suffix?: ElementStyles
  icon?: ElementStyles
  subMenuContent?: ElementStyles
  subMenuExpandIcon?: ElementStyles
}

// Expand Icon
export type RenderExpandIconParams = {
  open: boolean
  level: number
  active: boolean
  disabled: boolean
}

// Root Styles
export type RootStylesType = {
  rootStyles?: CSSObject
}

// Vertical Menu Data
export type VerticalMenuItemDataType = Omit<VerticalMenuItemProps, 'children'> & { label: string | ReactElement }
export type VerticalSubMenuDataType = Omit<VerticalSubMenuProps, 'children'> & { children: VerticalMenuDataType[] }
export type VerticalSectionDataType = Omit<VerticalMenuSectionProps, 'children'> & {
  isSection: boolean
  children: VerticalMenuDataType[]
}
export type VerticalMenuDataType = VerticalMenuItemDataType | VerticalSubMenuDataType | VerticalSectionDataType

// Horizontal Menu Data
export type HorizontalMenuItemDataType = Omit<HorizontalMenuItemProps, 'children'> & { label: string | ReactElement }
export type HorizontalSubMenuDataType = Omit<HorizontalSubMenuProps, 'children'> & {
  children: HorizontalMenuDataType[]
}
export type HorizontalMenuDataType = HorizontalMenuItemDataType | HorizontalSubMenuDataType
