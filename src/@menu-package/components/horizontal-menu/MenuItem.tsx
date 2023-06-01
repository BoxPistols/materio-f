// React Imports
import { forwardRef, useContext } from 'react'
import type { AnchorHTMLAttributes, ForwardRefRenderFunction, ReactElement, ReactNode, MouseEvent } from 'react'

// Third Party Imports
import classNames from 'classnames'
import type { CSSObject } from '@emotion/react'
import { useFloatingTree } from '@floating-ui/react'

// Type Imports
import type { ACLPropsType, ChildrenType, MenuItemElement, TransitionOptionsType } from '../../types'

// Context Imports
import { HorizontalSubMenuContext } from './SubMenu'

// Component Imports
import MenuButton from './MenuButton'

// Hook Imports
import useHorizontalMenu from '../../hooks/useHorizontalMenu'
import useVerticalNav from '../../hooks/useVerticalNav'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledHorizontalMenuItem from '../../styles/horizontal/StyledHorizontalMenuItem'

export type MenuItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  Partial<ChildrenType> & {
    icon?: ReactNode
    prefix?: ReactNode
    suffix?: ReactNode
    disabled?: boolean
    target?: string
    rel?: string
    aclProps?: ACLPropsType
    i18nKey?: string
    component?: string | ReactElement
    rootStyles?: CSSObject
    transitionOptions?: TransitionOptionsType

    /**
     * @ignore
     */
    level?: number
  }

const MenuItem: ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (props, ref) => {
  // Props
  const {
    children,
    icon,
    className,
    prefix,
    suffix,
    level = 0,
    disabled = false,
    transitionOptions,
    component,
    rootStyles,
    ...rest
  } = props

  // Hooks
  const tree = useFloatingTree()
  const { menuItemStyles } = useHorizontalMenu()
  const { toggleVerticalNav, isToggled } = useVerticalNav()
  const { getItemProps } = useContext(HorizontalSubMenuContext)

  const getMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the
    // specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = { level, disabled, isSubmenu: false }

      // Get the style function for the specified element.
      const styleFunction = menuItemStyles[element]

      if (styleFunction) {
        // If the style function is a function, call it and return the result.
        // Otherwise, return the style function itself.
        return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction
      }
    }
  }

  // Handle the click event.
  const handleClick = () => {
    if (isToggled) {
      toggleVerticalNav()
    }
  }

  return (
    <StyledHorizontalMenuItem
      ref={ref}
      className={classNames(
        { [menuClasses.menuItemRoot]: level === 0 },

        // { [menuClasses.active]: exactMatch },
        { [menuClasses.disabled]: disabled },
        className
      )}
      level={level}
      disabled={disabled}
      buttonStyles={getMenuItemStyles('button')}
      menuItemStyles={getMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <MenuButton
        className={menuClasses.button}
        component={component}
        tabIndex={0}
        {...rest}
        onClick={handleClick}
        {...getItemProps({
          onClick(event: MouseEvent<HTMLAnchorElement>) {
            props.onClick?.(event)
            tree?.events.emit('click')
          }
        })}
      >
        {icon && (
          <StyledMenuIcon className={menuClasses.icon} rootStyles={getMenuItemStyles('icon')}>
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            transitionOptions={transitionOptions}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rootStyles={getMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className={menuClasses.label} rootStyles={getMenuItemStyles('label')}>
          {children}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            transitionOptions={transitionOptions}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledHorizontalMenuItem>
  )
}

export default forwardRef(MenuItem)
