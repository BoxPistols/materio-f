// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'
import type { Dictionary, Params } from '@core/types'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

const verticalMenuData = (dictionary: Dictionary, params: Params): VerticalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary['navigation'].dashboards,
    icon: 'ri-home-smile-line',
    children: [
      // This is how you will normally render menu item
      {
        label: dictionary['navigation'].analytics,
        icon: 'ri-circle-line',
        href: '/dashboards/analytics'
      },
      {
        label: dictionary['navigation'].eCommerce,
        icon: 'ri-circle-line',
        href: '/dashboards/ecommerce'
      },
      {
        label: dictionary['navigation'].CRM,
        icon: 'ri-circle-line',
        href: '/dashboards/crm'
      }
    ]
  },

  // This is how you will normally render menu section
  {
    label: dictionary['navigation'].appsPages,
    isSection: true,
    children: [
      {
        label: dictionary['navigation'].calendar,
        href: '/apps/calendar',
        icon: 'ri-calendar-line'
      },
      {
        label: dictionary['navigation'].invoice,
        icon: 'ri-bill-line',
        children: [
          {
            label: dictionary['navigation'].list,
            icon: 'ri-circle-line',
            href: '/apps/invoice/list'
          },
          {
            label: dictionary['navigation'].preview,
            icon: 'ri-circle-line',
            href: `/apps/invoice/preview/${params.id || '4987'}`
          },
          {
            label: dictionary['navigation'].edit,
            icon: 'ri-circle-line',
            href: `/apps/invoice/edit/${params.id || '4987'}`
          },
          {
            label: dictionary['navigation'].add,
            icon: 'ri-circle-line',
            href: '/apps/invoice/add'
          }
        ]
      },
      {
        label: dictionary['navigation'].user,
        icon: 'ri-user-line',
        children: [
          {
            label: dictionary['navigation'].list,
            icon: 'ri-circle-line',
            href: '/apps/user/list'
          },
          {
            label: dictionary['navigation'].view,
            icon: 'ri-circle-line',
            href: '/apps/user/view'
          }
        ]
      },
      {
        label: dictionary['navigation'].rolesPermissions,
        icon: 'ri-lock-2-line',
        children: [
          {
            label: dictionary['navigation'].roles,
            icon: 'ri-circle-line',
            href: '/apps/roles'
          },
          {
            label: dictionary['navigation'].permissions,
            icon: 'ri-circle-line',
            href: '/apps/permissions'
          }
        ]
      },
      {
        label: dictionary['navigation'].pages,
        icon: 'ri-layout-left-line',
        children: [
          {
            label: dictionary['navigation'].userProfile,
            icon: 'ri-circle-line',
            href: '/pages/user-profile'
          },
          {
            label: dictionary['navigation'].accountSettings,
            icon: 'ri-circle-line',
            href: '/pages/account-settings'
          },
          {
            label: dictionary['navigation'].faq,
            icon: 'ri-circle-line',
            href: '/pages/faq'
          },
          {
            label: dictionary['navigation'].pricing,
            icon: 'ri-circle-line',
            href: '/pages/pricing'
          },
          {
            label: dictionary['navigation'].miscellaneous,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].comingSoon,
                icon: 'ri-circle-line',
                href: '/pages/misc/coming-soon',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].underMaintenance,
                icon: 'ri-circle-line',
                href: '/pages/misc/under-maintenance',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].pageNotFound404,
                icon: 'ri-circle-line',
                href: '/pages/misc/404-not-found',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].notAuthorized401,
                icon: 'ri-circle-line',
                href: '/pages/misc/401-not-authorized',
                target: '_blank'
              }
            ]
          }
        ]
      },
      {
        label: dictionary['navigation'].authPages,
        icon: 'ri-shield-keyhole-line',
        children: [
          {
            label: dictionary['navigation'].login,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].loginV1,
                icon: 'ri-circle-line',
                href: '/pages/auth/login-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].loginV2,
                icon: 'ri-circle-line',
                href: '/pages/auth/login-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].register,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].registerV1,
                icon: 'ri-circle-line',
                href: '/pages/auth/register-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].registerV2,
                icon: 'ri-circle-line',
                href: '/pages/auth/register-v2',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].registerMultiSteps,
                icon: 'ri-circle-line',
                href: '/pages/auth/register-multi-steps',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].verifyEmail,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].verifyEmailV1,
                icon: 'ri-circle-line',
                href: '/pages/auth/verify-email-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].verifyEmailV2,
                icon: 'ri-circle-line',
                href: '/pages/auth/verify-email-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].forgotPassword,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].forgotPasswordV1,
                icon: 'ri-circle-line',
                href: '/pages/auth/forgot-password-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].forgotPasswordV2,
                icon: 'ri-circle-line',
                href: '/pages/auth/forgot-password-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].resetPassword,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].resetPasswordV1,
                icon: 'ri-circle-line',
                href: '/pages/auth/reset-password-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].resetPasswordV2,
                icon: 'ri-circle-line',
                href: '/pages/auth/reset-password-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].twoSteps,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].twoStepsV1,
                icon: 'ri-circle-line',
                href: '/pages/auth/two-steps-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].twoStepsV2,
                icon: 'ri-circle-line',
                href: '/pages/auth/two-steps-v2',
                target: '_blank'
              }
            ]
          }
        ]
      },
      {
        label: dictionary['navigation'].wizardExamples,
        icon: 'ri-git-commit-line',
        children: [
          {
            label: dictionary['navigation'].checkout,
            icon: 'ri-circle-line',
            href: '/pages/wizard-examples/checkout'
          },
          {
            label: dictionary['navigation'].propertyListing,
            icon: 'ri-circle-line',
            href: '/pages/wizard-examples/property-listing'
          },
          {
            label: dictionary['navigation'].createDeal,
            icon: 'ri-circle-line',
            href: '/pages/wizard-examples/create-deal'
          }
        ]
      },
      {
        label: dictionary['navigation'].dialogExamples,
        icon: 'ri-tv-2-line',
        href: '/pages/dialog-examples'
      },
      {
        label: dictionary['navigation'].widgetExamples,
        icon: 'ri-bar-chart-box-line',
        children: [
          {
            label: dictionary['navigation'].advanced,
            icon: 'ri-circle-line',
            href: '/pages/widget-examples/advanced'
          },
          {
            label: dictionary['navigation'].statistics,
            icon: 'ri-circle-line',
            href: '/pages/widget-examples/statistics'
          },
          {
            label: dictionary['navigation'].charts,
            icon: 'ri-circle-line',
            href: '/pages/widget-examples/charts'
          },
          {
            label: dictionary['navigation'].gamification,
            icon: 'ri-circle-line',
            href: '/pages/widget-examples/gamification'
          }
        ]
      },
      {
        label: 'Icons Test',
        icon: 'ri-remixicon-line',
        href: '/icons-test'
      }
    ]
  },
  {
    label: dictionary['navigation'].formsAndTables,
    isSection: true,
    children: [
      {
        label: dictionary['navigation'].formLayouts,
        icon: 'ri-layout-4-line',
        href: '/forms/form-layouts'
      },
      {
        label: dictionary['navigation'].formValidation,
        icon: 'ri-checkbox-multiple-line',
        href: '/forms/form-validation'
      },
      {
        label: dictionary['navigation'].formWizard,
        icon: 'ri-git-commit-line',
        href: '/forms/form-wizard'
      },
      {
        label: dictionary['navigation'].reactTable,
        icon: 'ri-table-alt-line',
        href: '/react-table'
      },
      {
        label: dictionary['navigation'].formELements,
        icon: 'ri-radio-button-line',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        href: 'http://localhost:3001/docs/forms-tables/intro#form-elements',
        target: '_blank'
      },
      {
        label: dictionary['navigation'].muiTables,
        icon: 'ri-table-2',
        href: 'http://localhost:3001/docs/tables/mui-table',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      }
    ]
  },
  {
    label: dictionary['navigation'].chartsMisc,

    isSection: true,
    children: [
      {
        label: dictionary['navigation'].charts,
        icon: 'ri-bar-chart-2-line',
        children: [
          {
            label: dictionary['navigation'].recharts,
            icon: 'ri-circle-line',
            href: '/charts/recharts'
          },
          {
            label: dictionary['navigation'].apex,
            icon: 'ri-circle-line',
            href: '/charts/apex-charts'
          }
        ]
      },

      {
        label: dictionary['navigation'].userInterface,
        icon: 'ri-pantone-line',
        href: 'http://localhost:3001/docs/user-interface/intro',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].components,
        icon: 'ri-toggle-line',
        href: 'http://localhost:3001/docs/components/intro',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].menuExamples,
        icon: 'ri-menu-search-line',
        href: 'http://localhost:3001/docs/menu-examples/',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].raiseSupport,
        icon: 'ri-lifebuoy-line',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].documentation,
        icon: 'ri-book-line',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].others,
        icon: 'ri-more-line',
        children: [
          {
            label: dictionary['navigation'].itemWithBadge,
            icon: 'ri-circle-line'
          },
          {
            label: dictionary['navigation'].externalLink,
            icon: 'ri-circle-line',
            href: 'https://themeselection.com/',
            target: '_blank',
            suffix: <LinkExternalIcon fontSize='1.125rem' />
          },
          {
            label: dictionary['navigation'].menuLevels,
            icon: 'ri-circle-line',
            children: [
              {
                label: dictionary['navigation'].menuLevel2,
                icon: 'ri-circle-line'
              },
              {
                label: dictionary['navigation'].menuLevel2,
                icon: 'ri-circle-line',
                children: [
                  {
                    label: dictionary['navigation'].menuLevel3,
                    icon: 'ri-circle-line'
                  },
                  {
                    label: dictionary['navigation'].menuLevel3,
                    icon: 'ri-circle-line'
                  }
                ]
              }
            ]
          },
          {
            label: dictionary['navigation'].disabledMenu,
            disabled: true
          }
        ]
      }
    ]
  }
]

export default verticalMenuData
