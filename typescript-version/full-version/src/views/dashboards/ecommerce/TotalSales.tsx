'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import AppReactApexCharts from '@core/styles/libs/AppReactApexCharts'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

const TotalSales = () => {
  // Hooks
  const theme = useTheme()

  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  const textPrimary = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`)

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false }
    },
    stroke: {
      width: 6,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [theme.palette.primary.main, theme.palette.info.main, theme.palette.warning.main, theme.palette.error.main],
    grid: {
      padding: {
        top: -7,
        bottom: 5
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: -2,
              formatter: () => '28%',
              color: textPrimary
            },
            value: {
              offsetY: 2,
              fontSize: '0.8125rem',
              formatter: () => '1 Quarter',
              color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)
            },
            total: {
              show: true,
              label: '18%',
              fontWeight: 500,
              fontSize: '1.125rem',
              formatter: () => '1 Quarter',
              color: textPrimary
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardContent className='flex justify-between bs-full'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h5'>Total Sales</Typography>
            <Typography>Calculated in last 7 days</Typography>
          </div>
          <div className='flex items-center flex-wrap'>
            <Typography variant='h4'>$25,980</Typography>
            <div>
              <i className='ri-arrow-up-s-line align-bottom text-success' />
              <span className='text-success'>15.6%</span>
            </div>
          </div>
        </div>
        <AppReactApexCharts type='donut' width={130} height={114} options={options} series={[80, 22, 30, 50]} />
      </CardContent>
    </Card>
  )
}

export default TotalSales
