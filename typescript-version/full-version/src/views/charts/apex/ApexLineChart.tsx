'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Component Imports
import ReactApexcharts from '@components/charts/apexchart'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

const series = [
  {
    data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
  }
]

const ApexLineChart = () => {
  // Hooks
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  const divider = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`)
  const disabledText = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      zoom: { enabled: false },
      toolbar: { show: false },
      offsetX: theme.direction === 'rtl' ? 10 : -10
    },
    colors: ['#ff9f43'],
    stroke: { curve: 'straight' },
    dataLabels: { enabled: false },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      colors: ['#ff9f43'],
      strokeColors: ['#fff']
    },
    grid: {
      padding: { top: -10 },
      borderColor: divider,
      xaxis: {
        lines: { show: true }
      }
    },
    tooltip: {
      custom(data: any) {
        return `<div class='bar-chart'>
          <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
        </div>`
      }
    },
    yaxis: {
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: divider },
      crosshairs: {
        stroke: { color: divider }
      },
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      },
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
        '16/12',
        '17/12',
        '18/12',
        '19/12',
        '20/12',
        '21/12'
      ]
    }
  }

  return (
    <Card>
      <CardHeader
        title='Balance'
        subheader='Commercial networks & enterprises'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <ReactApexcharts type='line' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexLineChart
