'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import classnames from 'classnames'
import type { ApexOptions } from 'apexcharts'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionsMenu from '@core/components/option-menu'
import ReactApexcharts from '@components/charts/apexchart'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Style Imports
import commonStyles from '@/styles/common.module.css'

const WeeklySales = () => {
  // Hooks
  const theme = useTheme()

  const primaryColorWithOpacity = rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.1)`)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      show: false,
      padding: {
        top: -15,
        left: -10,
        right: -10,
        bottom: 30
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '60%'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      primaryColorWithOpacity,
      theme.palette.primary.main,
      primaryColorWithOpacity,
      primaryColorWithOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          fontSize: '13px',
          colors: rgbaToHex(`rgb(${theme.mainColorChannels.light} / 0.7)`)
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Weekly Sales'
        subheader='Total 85.4k Sales'
        action={
          <OptionsMenu iconClassName={commonStyles.textPrimary} options={['Last 28 Days', 'Last Month', 'Last Year']} />
        }
      />
      <CardContent>
        <ReactApexcharts type='bar' height={237} series={[{ data: [40, 60, 50, 60, 90, 40, 50] }]} options={options} />
        <div className='flex items-center justify-around'>
          <div className='flex items-center gap-3'>
            <CustomAvatar skin='light' variant='rounded'>
              <i className={classnames('ri-pie-chart-2-line', commonStyles.primaryColor)} />
            </CustomAvatar>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                34.6k
              </Typography>
              <Typography>Sales</Typography>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <CustomAvatar skin='light' color='success' variant='rounded'>
              <i className={classnames('ri-money-dollar-circle-line', commonStyles.successColor)} />
            </CustomAvatar>
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                $482k
              </Typography>
              <Typography>Total Profit</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WeeklySales
