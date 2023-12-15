'use client'

// Next Imports
import { usePathname, useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'
import Chip from '@mui/material/Chip'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu-package/components/vertical-menu/Menu'
import type { Dictionary } from '@core/types'

// Component Imports from @menu-package
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu-package/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

// Util Imports
import { getLocale } from '@/utils/get-locale'

// import { generateVerticalMenu } from '@/utils/menuUtils'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu-package/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/verticalMenuData'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary }: { dictionary: Dictionary }) => {
  // Hooks
  const theme = useTheme()
  const pathName = usePathname()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  const { transitionDuration } = verticalNavOptions

  // Get locale from pathname
  const locale = getLocale(pathName)

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden'
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true }
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu
          label={dictionary['navigation'].dashboards}
          icon={<i className='ri-home-smile-line' />}
          suffix={<Chip label='3' size='small' color='error' />}
        >
          <MenuItem href={`/${locale}/dashboards/analytics`}>{dictionary['navigation'].analytics}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/ecommerce`}>{dictionary['navigation'].eCommerce}</MenuItem>
        </SubMenu>
        <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/about`}>
          About
        </MenuItem>
        <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/user-list`}>
          User List
        </MenuItem>
        <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/user-details`}>
          User Details
        </MenuItem>
        <MenuSection label={dictionary['navigation'].appsPages}>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/email`}>
            {dictionary['navigation'].email}
          </MenuItem>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/chat`}>
            {dictionary['navigation'].chat}
          </MenuItem>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/apps/calendar`}>
            {dictionary['navigation'].calendar}
          </MenuItem>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].invoice}>
            <MenuItem href={`/${locale}/apps/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/preview/${params.id || '4987'}`}>
              {dictionary['navigation'].preview}
            </MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/edit/${params.id || '4987'}`}>
              {dictionary['navigation'].edit}
            </MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].user}>
            <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/user/view`}>{dictionary['navigation'].view}</MenuItem>
          </SubMenu>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].rolesPermissions}>
            <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem href={`/${locale}/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].pages}>
            <MenuItem href={`/${locale}/pages/user-profile`}>{dictionary['navigation'].userProfile}</MenuItem>
            <MenuItem href={`/${locale}/pages/account-settings`}>{dictionary['navigation'].accountSettings}</MenuItem>
            <MenuItem href={`/${locale}/pages/faq`}>{dictionary['navigation'].faq}</MenuItem>
            <MenuItem href={`/${locale}/pages/pricing`}>{dictionary['navigation'].pricing}</MenuItem>
            <SubMenu label={dictionary['navigation'].miscellaneous}>
              <MenuItem href={`/${locale}/pages/misc/coming-soon`} target='_blank'>
                {dictionary['navigation'].comingSoon}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/under-maintenance`} target='_blank'>
                {dictionary['navigation'].underMaintenance}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/404-not-found`} target='_blank'>
                {dictionary['navigation'].pageNotFound404}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/401-not-authorized`} target='_blank'>
                {dictionary['navigation'].notAuthorized401}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].authPages}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem href={`/${locale}/pages/auth/login-v1`} target='_blank'>
                {dictionary['navigation'].loginV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/login-v2`} target='_blank'>
                {dictionary['navigation'].loginV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].register}>
              <MenuItem href={`/${locale}/pages/auth/register-v1`} target='_blank'>
                {dictionary['navigation'].registerV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-v2`} target='_blank'>
                {dictionary['navigation'].registerV2}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-multi-steps`} target='_blank'>
                {dictionary['navigation'].registerMultiSteps}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].verifyEmail}>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v1`} target='_blank'>
                {dictionary['navigation'].verifyEmailV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v2`} target='_blank'>
                {dictionary['navigation'].verifyEmailV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].forgotPassword}>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v1`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v2`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].resetPassword}>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v1`} target='_blank'>
                {dictionary['navigation'].resetPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v2`} target='_blank'>
                {dictionary['navigation'].resetPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].twoSteps}>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v1`} target='_blank'>
                {dictionary['navigation'].twoStepsV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v2`} target='_blank'>
                {dictionary['navigation'].twoStepsV2}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].wizardExamples}>
            <MenuItem href={`/${locale}/pages/wizard-examples/checkout`}>{dictionary['navigation'].checkout}</MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/property-listing`}>
              {dictionary['navigation'].propertyListing}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/create-deal`}>
              {dictionary['navigation'].createDeal}
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/pages/dialog-examples`}>
            {dictionary['navigation'].dialogExamples}
          </MenuItem>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].widgetExamples}>
            <MenuItem href={`/${locale}/pages/widget-examples/advanced`}>{dictionary['navigation'].advanced}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/statistics`}>
              {dictionary['navigation'].statistics}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/charts`}>{dictionary['navigation'].charts}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/gamification`}>
              {dictionary['navigation'].gamification}
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/icons-test`}>
            Icons Test
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].formsAndTables}>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/forms/form-layouts`}>
            {dictionary['navigation'].formLayouts}
          </MenuItem>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/forms/form-validation`}>
            {dictionary['navigation'].formValidation}
          </MenuItem>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/forms/form-wizard`}>
            {dictionary['navigation'].formWizard}
          </MenuItem>
          <MenuItem icon={<i className='ri-home-smile-line' />} href={`/${locale}/react-table`}>
            {dictionary['navigation'].reactTable}
          </MenuItem>
          <MenuItem
            icon={<i className='ri-home-smile-line' />}
            href='http://localhost:3001/docs/forms-tables/intro#form-elements'
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].formELements}
          </MenuItem>
          <MenuItem
            icon={<i className='ri-home-smile-line' />}
            href='http://localhost:3001/docs/tables/mui-table'
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].muiTables}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].chartsMisc}>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].charts}>
            <MenuItem href={`/${locale}/charts/recharts`}>{dictionary['navigation'].recharts}</MenuItem>
            <MenuItem href={`/${locale}/charts/apex-charts`}>{dictionary['navigation'].apex}</MenuItem>
          </SubMenu>
          <MenuItem
            icon={<i className='ri-home-smile-line' />}
            href='http://localhost:3001/docs/user-interface/intro'
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].userInterface}
          </MenuItem>
          <MenuItem
            icon={<i className='ri-home-smile-line' />}
            href='http://localhost:3001/docs/components/intro'
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].components}
          </MenuItem>
          <MenuItem
            icon={<i className='ri-home-smile-line' />}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].raiseSupport}
          </MenuItem>
          <MenuItem
            icon={<i className='ri-home-smile-line' />}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].documentation}
          </MenuItem>
          <SubMenu icon={<i className='ri-home-smile-line' />} label={dictionary['navigation'].others}>
            <MenuItem suffix={<Chip label='New' size='small' color='info' />}>
              {dictionary['navigation'].itemWithBadge}
            </MenuItem>
            <MenuItem
              href='https://themeselection.com/'
              target='_blank'
              suffix={<i className='ri-external-link-line text-xl' />}
            >
              {dictionary['navigation'].externalLink}
            </MenuItem>
            <SubMenu label={dictionary['navigation'].menuLevels}>
              <MenuItem>{dictionary['navigation'].menuLevel2}</MenuItem>
              <SubMenu label={dictionary['navigation'].menuLevel2}>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>{dictionary['navigation'].disabledMenu}</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>

      {/* <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {generateVerticalMenu(menuData(locale, params), locale)}
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
