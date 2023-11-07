'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'

// Style Imports
import commonStyles from '@/styles/common.module.css'

type ConnectedAccountsType = {
  title: string
  logo: string
  checked: boolean
  subtitle: string
}

type SocialAccountsType = {
  title: string
  logo: string
  username?: string
  isConnected: boolean
}

const connectedAccountsArr: ConnectedAccountsType[] = [
  {
    checked: true,
    title: 'Google',
    logo: '/images/logos/google.png',
    subtitle: 'Calendar and Contacts'
  },
  {
    checked: false,
    title: 'Slack',
    logo: '/images/logos/slack.png',
    subtitle: 'Communications'
  },
  {
    checked: true,
    title: 'Github',
    logo: '/images/logos/github.png',
    subtitle: 'Manage your Git repositories'
  },
  {
    checked: true,
    title: 'Mailchimp',
    subtitle: 'Email marketing service',
    logo: '/images/logos/mailchimp.png'
  },
  {
    title: 'Asana',
    checked: false,
    subtitle: 'Task Communication',
    logo: '/images/logos/asana.png'
  }
]

const socialAccountsArr: SocialAccountsType[] = [
  {
    title: 'Facebook',
    isConnected: false,
    logo: '/images/logos/facebook.png'
  },
  {
    title: 'Twitter',
    isConnected: true,
    username: '@Theme_Selection',
    logo: '/images/logos/twitter.png'
  },
  {
    title: 'Linkedin',
    isConnected: true,
    username: '@ThemeSelection',
    logo: '/images/logos/linkedin.png'
  },
  {
    title: 'Dribbble',
    isConnected: false,
    logo: '/images/logos/dribbble.png'
  },
  {
    title: 'Behance',
    isConnected: false,
    logo: '/images/logos/behance.png'
  }
]

const ConnectionsTab = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Connected Accounts'
            subheader='Display content from your connected accounts on your site'
          />
          <CardContent className='flex flex-col gap-4'>
            {connectedAccountsArr.map((item, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex flex-grow items-center gap-4'>
                  <img height={36} width={36} src={item.logo} alt={item.title} />
                  <div className='flex-grow'>
                    <Typography className='font-medium'>{item.title}</Typography>
                    <Typography variant='body2'>{item.subtitle}</Typography>
                  </div>
                </div>
                <Switch defaultChecked={item.checked} />
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Social Accounts'
            titleTypographyProps={{ variant: 'h6' }}
            subheader='Display content from social accounts on your site'
          />
          <CardContent className='flex flex-col gap-4'>
            {socialAccountsArr.map((item, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex flex-grow items-center gap-4'>
                  <img height={36} width={36} src={item.logo} alt={item.title} />
                  <div className='flex-grow'>
                    <Typography href='/' component={Link} onClick={e => e.preventDefault()} className='font-medium'>
                      {item.title}
                    </Typography>
                    {item.isConnected ? (
                      <Typography variant='body2' className={commonStyles.primaryColor}>
                        {item.username}
                      </Typography>
                    ) : (
                      <Typography variant='body2'>Not Connected</Typography>
                    )}
                  </div>
                </div>
                <Button variant='outlined' color='secondary'>
                  <i className={item.isConnected ? 'ri-delete-bin-7-line' : 'ri-link-m'} />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ConnectionsTab
