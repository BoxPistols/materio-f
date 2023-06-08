'use client'

// React Imports
import { Children, cloneElement, createContext, forwardRef, useEffect, useRef, useState } from 'react'
import type {
  AnchorHTMLAttributes,
  ForwardRefRenderFunction,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  HTMLProps,
  ReactNode
} from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import classnames from 'classnames'
import styled from '@emotion/styled'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useRole,
  useInteractions,
  useClick,
  safePolygon,
  useDismiss,
  useFloatingNodeId,
  FloatingNode,
  FloatingPortal,
  useMergeRefs,
  useFloatingParentNodeId,
  useFloatingTree,
  useTransitionStyles
} from '@floating-ui/react'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { ChildrenType, RootStylesType, SubMenuItemElement } from '../../types'
import type { MenuItemProps } from './MenuItem'

// Component Imports
import SubMenuContent from './SubMenuContent'

// Hook Imports
import useHorizontalMenu from '../../hooks/useHorizontalMenu'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'
import { confirmUrlInChildren } from '../../utils/menuUtils'

// Styled Component Imports
import MenuButton, { menuButtonStyles } from './MenuButton'
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledHorizontalNavExpandIcon, {
  StyledHorizontalNavExpandIconWrapper
} from '../../styles/horizontal/StyledHorizontalNavExpandIcon'

export type SubMenuProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  RootStylesType &
  Partial<ChildrenType> & {
    label: ReactNode
    icon?: ReactElement
    prefix?: ReactNode
    suffix?: ReactNode
    disabled?: boolean
    component?: string | ReactElement
    contentClassName?: string
    onOpenChange?: (open: boolean) => void

    /**
     * @ignore
     */
    level?: number
  }

type StyledSubMenuProps = Pick<SubMenuProps, 'rootStyles' | 'disabled'> & {
  level: number
  active?: boolean
  menuItemStyles?: CSSObject
  buttonStyles?: CSSObject
}

type HorizontalSubMenuContextProps = {
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
}

const StyledSubMenu = styled.li<StyledSubMenuProps>`
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled, children }) =>
      menuButtonStyles({
        level,
        disabled,
        children
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`

export const HorizontalSubMenuContext = createContext<HorizontalSubMenuContextProps>({ getItemProps: () => ({}) })

const SubMenu: ForwardRefRenderFunction<HTMLLIElement, SubMenuProps> = (props, ref) => {
  const {
    children,
    className,
    contentClassName,
    label,
    icon,
    title,
    prefix,
    suffix,
    level = 0,
    disabled = false,
    rootStyles,
    component,
    onClick,
    onKeyUp,
    onOpenChange,
    ...rest
  } = props

  const { triggerPopout, renderExpandIcon, menuItemStyles, browserScroll, transitionDuration } = useHorizontalMenu()

  // State
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  // Refs
  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])

  // Filter out falsy values from children
  const childNodes = Children.toArray(children).filter(Boolean) as [ReactElement<SubMenuProps | MenuItemProps>]

  // Floating UI Hooks
  const tree = useFloatingTree()
  const nodeId = useFloatingNodeId()
  const parentId = useFloatingParentNodeId()

  // Hooks
  const pathname = usePathname()

  const { x, y, strategy, refs, context } = useFloating({
    open,
    nodeId,
    onOpenChange: setOpen,
    placement: level > 0 ? 'right-start' : 'bottom-start',
    middleware: [
      offset({ mainAxis: level > 0 ? (browserScroll ? 20 : 10) : 8, alignmentAxis: level > 0 ? -5 : 0 }),
      flip(),
      shift()
    ],
    whileElementsMounted: autoUpdate
  })

  // Floating UI Transition Styles
  const { isMounted, styles } = useTransitionStyles(context, {
    // Configure both open and close durations:
    duration: transitionDuration,

    initial: {
      opacity: 0,
      transform: 'translateY(10px)'
    },
    open: {
      opacity: 1,
      transform: 'translateY(0px)'
    },
    close: {
      opacity: 0,
      transform: 'translateY(10px)'
    }
  })

  const hover = useHover(context, {
    handleClose: safePolygon({
      blockPointerEvents: true
    }), // safePolygon function allows us to reach to submenu
    restMs: 25, // Only opens submenu when cursor rests for 25ms on a menu
    enabled: triggerPopout === 'hover', // Only enable hover effect when triggerPopout option is set to 'hover',
    delay: { open: 75 } // Delay opening submenu by 75ms
  })
  const click = useClick(context, {
    enabled: triggerPopout === 'click', // Only enable click effect when triggerPopout option is set to 'click'
    toggle: false
  })

  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'menu' })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    hover,
    click,
    dismiss,
    role

    // listNavigation
  ])

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    onClick?.(event)
    triggerPopout === 'click' && setOpen(!open)
  }

  const handleOnKeyUp = (event: KeyboardEvent<HTMLAnchorElement>) => {
    onKeyUp?.(event)
    if (event.key === 'Enter') {
      setOpen(!open)
    }
  }

  const getSubMenuItemStyles = (element: SubMenuItemElement): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the
    // specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = { level, disabled, active, isSubmenu: true, open: open }

      // Get the style function for the specified element.
      const styleFunction = menuItemStyles[element]

      if (styleFunction) {
        // If the style function is a function, call it and return the result.
        // Otherwise, return the style function itself.
        return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction
      }
    }
  }

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  useEffect(() => {
    function handleTreeClick() {
      setOpen(false)
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setOpen(false)
      }
    }

    tree?.events.on('click', handleTreeClick)
    tree?.events.on('menuopen', onSubMenuOpen)

    return () => {
      tree?.events.off('click', handleTreeClick)
      tree?.events.off('menuopen', onSubMenuOpen)
    }
  }, [tree, nodeId, parentId])

  useEffect(() => {
    if (open) {
      tree?.events.emit('menuopen', {
        parentId,
        nodeId
      })
    }
  }, [tree, open, nodeId, parentId])

  // Change active state when the url changes
  useEffect(() => {
    // Check if the current url matches any of the children urls
    if (confirmUrlInChildren(children, pathname)) {
      setActive(true)
    } else {
      setActive(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // User event handler for open state change
  useEffect(() => {
    onOpenChange?.(open)
  }, [open])

  // Merge the reference ref with the ref passed to the component
  const referenceRef = useMergeRefs([refs.setReference, ref])

  return (
    <FloatingNode id={nodeId}>
      {/* Sub Menu */}
      <StyledSubMenu
        {...(!disabled && { ref: referenceRef, ...getReferenceProps() })}
        className={classnames(
          { [menuClasses.subMenuRoot]: level === 0 },
          { [menuClasses.active]: active },
          { [menuClasses.disabled]: disabled },
          { [menuClasses.open]: open },
          className
        )}
        menuItemStyles={getSubMenuItemStyles('root')}
        level={level}
        disabled={disabled}
        active={active}
        buttonStyles={getSubMenuItemStyles('button')}
        rootStyles={rootStyles}
      >
        {/* Menu Item */}
        <MenuButton
          title={title}
          className={classnames(menuClasses.button, { [menuClasses.active]: active })}
          component={component}
          onClick={handleOnClick}
          onKeyUp={handleOnKeyUp}
          {...rest}
        >
          {/* Menu Item Icon */}
          {icon && (
            <StyledMenuIcon className={menuClasses.icon} rootStyles={getSubMenuItemStyles('icon')}>
              {icon}
            </StyledMenuIcon>
          )}

          {/* Menu Item Prefix */}
          {prefix && (
            <StyledMenuPrefix
              firstLevel={level === 0}
              className={menuClasses.prefix}
              rootStyles={getSubMenuItemStyles('prefix')}
            >
              {prefix}
            </StyledMenuPrefix>
          )}

          {/* Menu Item Name */}
          <StyledMenuLabel className={menuClasses.label} rootStyles={getSubMenuItemStyles('label')}>
            {label}
          </StyledMenuLabel>

          {/* Menu Item Suffix */}
          {suffix && (
            <StyledMenuSuffix
              firstLevel={level === 0}
              className={menuClasses.suffix}
              rootStyles={getSubMenuItemStyles('suffix')}
            >
              {suffix}
            </StyledMenuSuffix>
          )}

          {/* Sub Menu Toggle Icon Wrapper */}
          <StyledHorizontalNavExpandIconWrapper
            className={menuClasses.subMenuExpandIcon}
            level={level}
            rootStyles={getSubMenuItemStyles('subMenuExpandIcon')}
          >
            {renderExpandIcon ? (
              renderExpandIcon({
                level,
                disabled,
                active,
                open: open
              })
            ) : (
              // eslint-disable-next-line lines-around-comment
              /* Expanded Arrow Icon */
              <StyledHorizontalNavExpandIcon level={level} />
            )}
          </StyledHorizontalNavExpandIconWrapper>
        </MenuButton>

        <HorizontalSubMenuContext.Provider value={{ getItemProps }}>
          <FloatingPortal>
            {isMounted && (
              <SubMenuContent
                ref={refs.setFloating}
                {...getFloatingProps()}
                strategy={strategy}
                top={y ?? 0}
                left={x ?? 0}
                open={open}
                firstLevel={level === 0}
                className={classnames(menuClasses.subMenuContent, contentClassName)}
                rootStyles={getSubMenuItemStyles('subMenuContent')}
                style={{ ...styles }}
              >
                {childNodes.map((node, index) =>
                  cloneElement(node, {
                    ...getItemProps({
                      ref(node: HTMLButtonElement) {
                        listItemsRef.current[index] = node
                      },

                      onClick(event: MouseEvent<HTMLAnchorElement>) {
                        if (node.props.children && !Array.isArray(node.props.children)) {
                          node.props.onClick?.(event)
                          tree?.events.emit('click')
                        }
                      }
                    }),
                    level: level + 1
                  })
                )}
              </SubMenuContent>
            )}
          </FloatingPortal>
        </HorizontalSubMenuContext.Provider>
      </StyledSubMenu>
    </FloatingNode>
  )
}

export default forwardRef<HTMLLIElement, SubMenuProps>(SubMenu)
