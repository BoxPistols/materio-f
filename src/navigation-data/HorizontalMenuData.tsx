// Import React
import { ReactNode } from 'react'
import { RouterLink } from '../@menu-package/components/RouterLink'

// Import Vertical Menu Props
import { MenuItemProps, SubMenuProps } from '../@menu-package/components/horizontal-menu'

type MenuData =
  | (Omit<MenuItemProps, 'children'> & { label: string | ReactNode })
  | (Omit<SubMenuProps, 'children'> & { children: MenuData[] })

const menuData: MenuData[] = [
  {
    label: 'Home',
    disabled: false,
    target: '_blank',
    rel: 'noopener noreferrer',
    prefix: '-',
    suffix: '+',
    href: '/'
  },
  {
    label: 'About',
    component: 'div'
  },
  {
    label: 'About',
    component: <RouterLink href='/about' />
  },
  {
    label: 'Apps & Pages',
    prefix: '-',
    suffix: '+',
    rootStyles: { color: 'red' },
    children: [
      {
        label: 'Email',
        href: '/email'
      },
      {
        label: 'Chat',
        href: '/chat'
      },
      {
        label: 'Authentication',
        prefix: '12',
        suffix: 'AB',
        disabled: false,
        rootStyles: { backgroundColor: 'yellow' },
        children: [
          {
            label: 'Login',
            children: [
              {
                label: 'Login v1',
                href: '/login-v1'
              },
              {
                label: 'Login v2',
                href: '/login-v2'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Manage Users',
    children: [
      {
        label: 'User List',
        href: '/user-list'
      },
      {
        label: 'User Details',
        href: '/user-details'
      }
    ]
  }
]

export default menuData
