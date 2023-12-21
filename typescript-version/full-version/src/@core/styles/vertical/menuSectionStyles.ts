// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { VerticalNavState } from '@menu-package/contexts/verticalNavContext'
import type { MenuProps } from '@menu-package/vertical-menu'

// Util Imports
import { menuClasses } from '@menu-package/utils/menuClasses'

const menuSectionStyles = (verticalNavOptions: VerticalNavState, theme: Theme): MenuProps['menuSectionStyles'] => {
  const { isCollapsed, isHovered, collapsedWidth } = verticalNavOptions

  const collapsedNotHovered = isCollapsed && !isHovered

  return {
    root: {
      marginBlockStart: theme.spacing(7),
      [`& .${menuClasses.menuSectionContent}`]: {
        color: 'var(--mui-palette-text-disabled)',
        paddingInline: '0 !important',
        paddingBlock: `${theme.spacing(collapsedNotHovered ? 4.25 : 1.75)} !important`,
        gap: theme.spacing(2.5),
        ...(collapsedNotHovered && {
          paddingInlineStart: `${theme.spacing(((collapsedWidth as number) - 22) / 8)} !important`,
          paddingInlineEnd: `${theme.spacing((((collapsedWidth as number) - 22) / 2 - 5) / 4)} !important`
        }),

        '&:before': {
          content: '""',
          blockSize: 1,
          inlineSize: collapsedNotHovered ? '1.3125rem' : '0.875rem',
          backgroundColor: 'var(--mui-palette-divider)'
        },
        ...(!collapsedNotHovered && {
          '&:after': {
            content: '""',
            blockSize: 1,
            flexGrow: 1,
            backgroundColor: 'var(--mui-palette-divider)'
          }
        })
      },
      [`& .${menuClasses.menuSectionLabel}`]: {
        flexGrow: 0,
        ...(collapsedNotHovered && {
          display: 'none'
        })
      }
    }
  }
}

export default menuSectionStyles