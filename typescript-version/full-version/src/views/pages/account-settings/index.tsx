'use client'

// React Imports
import { useState, useEffect } from 'react'
import type { SyntheticEvent, ReactElement } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import AccountTab from './account'
import SecurityTab from './security'
import BillingPlansTab from './billing-plans'
import NotificationsTab from './notifications'
import ConnectionsTab from './connections'
import CustomTabList from '@core/components/mui/TabList'

const tabContentList = (data: PricingPlanType[]): { [key: string]: ReactElement } => ({
  account: <AccountTab />,
  security: <SecurityTab />,
  'billing-plans': <BillingPlansTab data={data} />,
  notifications: <NotificationsTab />,
  connections: <ConnectionsTab />
})

const AccountSettings = ({ tab, data }: { tab: string; data: PricingPlanType[] }) => {
  // States
  const [activeTab, setActiveTab] = useState(tab)

  const [loading, setLoading] = useState<boolean>(true)

  // Hooks
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, value: string) => {
    setLoading(true)
    const pathname = `/pages/account-settings/${value.toLowerCase()}`

    router.push(pathname)
  }

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <Grid container>
      <Grid item xs={12}>
        <TabContext value={activeTab}>
          <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-user-3-line' />
                  Account
                </div>
              }
              value='account'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-lock-unlock-line' />
                  Security
                </div>
              }
              value='security'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-bookmark-line' />
                  Billing & Plans
                </div>
              }
              value='billing-plans'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-notification-3-line' />
                  Notifications
                </div>
              }
              value='notifications'
            />
            <Tab
              label={
                <div className='flex items-center'>
                  <i className='ri-link' />
                  Connections
                </div>
              }
              value='connections'
            />
          </CustomTabList>
          <Grid item xs={12}>
            {loading ? (
              <div className='flex flex-col items-center'>
                <CircularProgress />
                <Typography>Loading...</Typography>
              </div>
            ) : (
              <TabPanel value={activeTab} className='p-0'>
                {tabContentList(data)[activeTab]}
              </TabPanel>
            )}
          </Grid>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default AccountSettings
