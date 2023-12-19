// Do not remove this following 'use client' else SubMenu rendered in vertical menu on smaller screen will not work.
'use client'

// Next Imports
import { usePathname, useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Type Imports
import type { Dictionary, Skin } from '@core/types'

// Component Imports from @menu-package
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu-package/horizontal-menu'
import VerticalNavContent from './VerticalNavContent'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocale } from '@/utils/get-locale'

// import { generateHorizontalMenu } from '@/utils/menuUtils'

// Styled Component Imports
import StyledHorizontalNavExpandIcon from '@menu-package/styles/horizontal/StyledHorizontalNavExpandIcon'

// Style Imports
import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'
import menuRootStyles from '@core/styles/horizontal/menuRootStyles'
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/horizontalMenuData'

type RenderExpandIconProps = {
  level?: number
}

const RenderExpandIcon = ({ level }: RenderExpandIconProps) => (
  <StyledHorizontalNavExpandIcon level={level}>
    <i className='ri-arrow-right-s-line' />
  </StyledHorizontalNavExpandIcon>
)

const HorizontalMenu = ({ dictionary }: { dictionary: Dictionary }) => {
  // Hooks
  const verticalNavOptions = useVerticalNav()
  const theme = useTheme()
  const pathName = usePathname()
  const { settings } = useSettings()
  const params = useParams()

  const { skin } = settings

  // Get locale from pathname
  const locale = getLocale(pathName)

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(verticalNavOptions, theme, skin as Skin),
        backgroundColor:
          skin === 'bordered' ? 'var(--mui-palette-background-paper)' : 'var(--mui-palette-background-default)'
      }}
    >
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuItemStyles={menuItemStyles(settings, theme)}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
          alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
        }}
      >
        <SubMenu label={dictionary['navigation'].dashboards} icon={<i className='ri-home-smile-line' />}>
          <MenuItem href={`/${locale}/dashboards/analytics`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].analytics}
          </MenuItem>
          <MenuItem href={`/${locale}/dashboards/ecommerce`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].eCommerce}
          </MenuItem>
        </SubMenu>
        <MenuItem href={`/${locale}/about`} icon={<i className='ri-home-smile-line' />}>
          About
        </MenuItem>
        <MenuItem href={`/${locale}/user-list`} icon={<i className='ri-home-smile-line' />}>
          User List
        </MenuItem>
        <MenuItem href={`/${locale}/user-details`} icon={<i className='ri-home-smile-line' />}>
          User Details
        </MenuItem>
        <SubMenu label={dictionary['navigation'].apps} icon={<i className='ri-home-smile-line' />}>
          <MenuItem href={`/${locale}/email`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].email}
          </MenuItem>
          <MenuItem href={`/${locale}/chat`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].chat}
          </MenuItem>
          <MenuItem href={`/${locale}/apps/calendar`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].calendar}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].invoice} icon={<i className='ri-home-smile-line' />}>
            <MenuItem href={`/${locale}/apps/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/preview/${params.id || '4987'}`}>
              {dictionary['navigation'].preview}
            </MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/edit/${params.id || '4987'}`}>
              {dictionary['navigation'].edit}
            </MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user} icon={<i className='ri-home-smile-line' />}>
            <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/${locale}/apps/user/view`}>{dictionary['navigation'].view}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].rolesPermissions} icon={<i className='ri-home-smile-line' />}>
            <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem href={`/${locale}/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].pages} icon={<i className='ri-home-smile-line' />}>
          <MenuItem href={`/${locale}/pages/user-profile`} icon={<i className='ri-user-line' />}>
            {dictionary['navigation'].userProfile}
          </MenuItem>
          <MenuItem href={`/${locale}/pages/account-settings`} icon={<i className='ri-mail-open-line' />}>
            {dictionary['navigation'].accountSettings}
          </MenuItem>
          <MenuItem href={`/${locale}/pages/faq`} icon={<i className='ri-wechat-line' />}>
            {dictionary['navigation'].faq}
          </MenuItem>
          <MenuItem href={`/${locale}/pages/pricing`} icon={<i className='ri-money-dollar-circle-line' />}>
            {dictionary['navigation'].pricing}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].miscellaneous} icon={<i className='ri-layout-grid-line' />}>
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
          <SubMenu label={dictionary['navigation'].authPages} icon={<i className='ri-lock-2-line' />}>
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
          <SubMenu label={dictionary['navigation'].wizardExamples} icon={<i className='ri-home-smile-line' />}>
            <MenuItem href={`/${locale}/pages/wizard-examples/checkout`}>{dictionary['navigation'].checkout}</MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/property-listing`}>
              {dictionary['navigation'].propertyListing}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/create-deal`}>
              {dictionary['navigation'].createDeal}
            </MenuItem>
          </SubMenu>
          <MenuItem href={`/${locale}/pages/dialog-examples`} icon={<i className='ri-bank-card-line' />}>
            {dictionary['navigation'].dialogExamples}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].widgetExamples} icon={<i className='ri-file-list-2-line' />}>
            <MenuItem href={`/${locale}/pages/widget-examples/advanced`}>{dictionary['navigation'].advanced}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/statistics`}>
              {dictionary['navigation'].statistics}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/charts`}>{dictionary['navigation'].charts}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/gamification`}>
              {dictionary['navigation'].gamification}
            </MenuItem>
          </SubMenu>
          <MenuItem href={`/${locale}/icons-test`} icon={<i className='ri-remixicon-line' />}>
            Icons Test
          </MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].formsAndTables} icon={<i className='ri-home-smile-line' />}>
          <MenuItem href={`/${locale}/forms/form-layouts`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].formLayouts}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-validation`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].formValidation}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-wizard`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].formWizard}
          </MenuItem>
          <MenuItem href={`/${locale}/react-table`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].reactTable}
          </MenuItem>
          <MenuItem
            href='http://localhost:3001/docs/forms-tables/intro#form-elements'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].formELements}
          </MenuItem>
          <MenuItem
            href='http://localhost:3001/docs/tables/mui-table'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].muiTables}
          </MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].charts} icon={<i className='ri-home-smile-line' />}>
          <MenuItem href={`/${locale}/charts/recharts`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].recharts}
          </MenuItem>
          <MenuItem href={`/${locale}/charts/apex-charts`} icon={<i className='ri-home-smile-line' />}>
            {dictionary['navigation'].apex}
          </MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].others} icon={<i className='ri-home-smile-line' />}>
          <MenuItem
            href='http://localhost:3001/docs/user-interface/intro'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].userInterface}
          </MenuItem>
          <MenuItem
            href='http://localhost:3001/docs/components/intro'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
            target='_blank'
          >
            {dictionary['navigation'].components}
          </MenuItem>
          <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />} target='_blank'>
            {dictionary['navigation'].raiseSupport}
          </MenuItem>
          <MenuItem suffix={<LinkExternalIcon fontSize='1.125rem' />} target='_blank'>
            {dictionary['navigation'].documentation}
          </MenuItem>
          <MenuItem suffix='2️⃣'>{dictionary['navigation'].itemWithBadge}</MenuItem>
          <MenuItem
            href='https://themeselection.com/'
            target='_blank'
            suffix={<LinkExternalIcon fontSize='1.125rem' />}
          >
            {dictionary['navigation'].externalLink}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].menuLevels} icon={<i className='ri-home-smile-line' />}>
            <MenuItem>{dictionary['navigation'].menuLevel2}</MenuItem>
            <SubMenu label={dictionary['navigation'].menuLevel2}>
              <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
              <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem disabled>{dictionary['navigation'].disabledMenu}</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuItemStyles={menuItemStyles(settings, theme)}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 4 : 16),
          alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
        }}
      >
        {generateHorizontalMenu(menuData(locale, params), locale)}
      </Menu> */}
    </HorizontalNav>
  )
}

export default HorizontalMenu
