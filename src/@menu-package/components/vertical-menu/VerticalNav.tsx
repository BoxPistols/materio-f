'use client'

// React Imports
import { useEffect } from 'react'
import type { HTMLAttributes } from 'react'

// Third Party Imports
import classnames from 'classnames'
import type { CSSObject } from '@emotion/react'

// Type Imports
import type { BreakPointType, TransitionOptionsType } from '../../types'

// Context Imports
import type { VerticalNavState } from '../../contexts/verticalNavContext'

// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { verticalNavClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledBackdrop from '../../styles/StyledBackdrop'
import StyledVerticalNav from '../../styles/vertical/StyledVerticalNav'
import StyledVerticalNavBgImage from '../../styles/vertical/StyledVerticalNavBgImage'
import StyledVerticalNavContainer from '../../styles/vertical/StyledVerticalNavContainer'
import StyledVerticalNavBgColorContainer from '../../styles/vertical/StyledVerticalNavBgColorContainer'

// Breakpoints Data Import
import { breakpoints, transitionOptionsDefaults } from '../../defaultConfigs'

// Define Types
export type VerticalNavProps = HTMLAttributes<HTMLHtmlElement> & {
  width?: VerticalNavState['width']
  collapsedWidth?: VerticalNavState['collapsedWidth']
  defaultCollapsed?: boolean
  rtl?: VerticalNavState['isRtl']
  backgroundColor?: string
  backgroundImage?: string
  breakPoint?: BreakPointType
  customBreakPoint?: string
  transitionOptions?: TransitionOptionsType
  backdropColor?: string
  popoutWhenCollapsed?: boolean
  scrollWithContent?: boolean
  customStyle?: CSSObject
}

// VerticalNav Component
const VerticalNav = (props: VerticalNavProps) => {
  // Destructure Props with default values
  const {
    width = 260,
    collapsedWidth = 80,
    defaultCollapsed = false,
    rtl = false,
    backgroundColor = 'white',
    backgroundImage,
    breakPoint = 'lg',
    customBreakPoint,
    transitionOptions = transitionOptionsDefaults,
    backdropColor,
    popoutWhenCollapsed = false,
    scrollWithContent = false,
    className,
    customStyle,
    children,
    ...rest
  } = props

  // Find the breakpoint from which screen size responsive behavior should enable and if its reached or not
  const breakpointReached = useMediaQuery(customBreakPoint ?? (breakPoint ? breakpoints[breakPoint] : breakPoint))

  // Hooks
  const {
    updateVerticalNavState,
    isCollapsed: isCollapsedContext,
    width: widthContext,
    collapsedWidth: collapsedWidthContext,
    isBreakpointReached: isBreakpointReachedContext,
    isToggled: isToggledContext,
    isHovered: isHoveredContext,
    collapsing: collapsingContext,
    expanding: expandingContext,
    transitionOptions: transitionOptionsContext,
    isScrollWithContent: isScrollWithContentContext
  } = useVerticalNav()

  // UseEffect, update verticalNav state to set initial values and update values on change
  useEffect(() => {
    updateVerticalNavState({
      width,
      collapsedWidth,
      transitionOptions,
      isScrollWithContent: scrollWithContent,
      isRtl: rtl,
      isBreakpointReached: breakpointReached,
      isPopoutWhenCollapsed: popoutWhenCollapsed
    })

    if (!breakpointReached) {
      updateVerticalNavState({ isToggled: false })
    } else {
      isCollapsedContext && updateVerticalNavState({ isCollapsed: false })
      isHoveredContext && updateVerticalNavState({ isHovered: false })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, collapsedWidth, rtl, scrollWithContent, breakpointReached, popoutWhenCollapsed, updateVerticalNavState])

  useEffect(() => {
    updateVerticalNavState({
      isCollapsed: defaultCollapsed,
      transitionOptions: { ...transitionOptionsDefaults, ...transitionOptions },
      isToggled: false
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCollapsed, JSON.stringify(transitionOptions), updateVerticalNavState])

  useEffect(() => {
    setTimeout(() => {
      updateVerticalNavState({
        expanding: false,
        collapsing: false
      })
    }, transitionOptions?.duration as number)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCollapsedContext])

  // Handle Backdrop(Content Overlay) Click
  const handleBackdropClick = () => {
    // Close the verticalNav
    updateVerticalNavState({ isToggled: false })
  }

  // Handle VerticalNav Hover Event
  const handleVerticalNavHover = () => {
    /* If verticalNav is collapsed then only hover class should be added to verticalNav
      and hover functionality should work (expand verticalNav width) */
    if (isCollapsedContext && !isHoveredContext) {
      updateVerticalNavState({ isHovered: true })
    }
  }

  // Handle VerticalNav Hover Out Event
  const handleVerticalNavHoverOut = () => {
    // If verticalNav is collapsed then only remove hover class should contract verticalNav width
    if (isCollapsedContext && isHoveredContext) {
      updateVerticalNavState({ isHovered: false })
    }
  }

  return (
    <StyledVerticalNav
      width={widthContext}
      isBreakpointReached={isBreakpointReachedContext}
      collapsedWidth={collapsedWidthContext}
      collapsing={collapsingContext}
      expanding={expandingContext}
      transitionOptions={transitionOptionsContext}
      customStyle={customStyle}
      scrollWithContent={isScrollWithContentContext}
      className={classnames(
        verticalNavClasses.root,
        {
          [verticalNavClasses.collapsed]: isCollapsedContext,
          [verticalNavClasses.toggled]: isToggledContext,
          [verticalNavClasses.hovered]: isHoveredContext,
          [verticalNavClasses.breakpointReached]: isBreakpointReachedContext,
          [verticalNavClasses.scrollWithContent]: isScrollWithContentContext,
          [verticalNavClasses.collapsing]: collapsingContext,
          [verticalNavClasses.expanding]: expandingContext
        },
        className
      )}
      {
        // eslint-disable-next-line lines-around-comment
        /* Toggle verticalNav on hover only when popoutWhenCollapsed(default false) is false */
        ...(!popoutWhenCollapsed &&
          isCollapsedContext && {
            onMouseEnter: handleVerticalNavHover,
            onMouseLeave: handleVerticalNavHoverOut
          })
      }
      {...rest}
    >
      {/* VerticalNav Container for hover effect when verticalNav is collapsed */}
      <StyledVerticalNavContainer
        width={widthContext}
        transitionOptions={transitionOptionsContext}
        className={verticalNavClasses.container}
      >
        {/* VerticalNav Container to apply styling like background */}
        <StyledVerticalNavBgColorContainer
          className={verticalNavClasses.bgColorContainer}
          backgroundColor={backgroundColor}
        >
          {children}
        </StyledVerticalNavBgColorContainer>

        {/* Display verticalNav background image if provided by user through props */}
        {backgroundImage && (
          // eslint-disable-next-line lines-around-comment
          /* VerticalNav Background Image */
          <StyledVerticalNavBgImage
            className={verticalNavClasses.image}
            src={backgroundImage}
            alt='verticalNav background'
          />
        )}
      </StyledVerticalNavContainer>

      {/* When verticalNav is toggled on smaller screen, show/hide verticalNav backdrop */}
      {isToggledContext && breakpointReached && (
        // eslint-disable-next-line lines-around-comment
        /* VerticalNav Backdrop */
        <StyledBackdrop
          role='button'
          tabIndex={0}
          aria-label='backdrop'
          onClick={handleBackdropClick}
          onKeyPress={handleBackdropClick}
          className={verticalNavClasses.backdrop}
          backdropColor={backdropColor}
        />
      )}
    </StyledVerticalNav>
  )
}

export default VerticalNav
