'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Custom Components Imports
import OptionsMenu from '@core/components/option-menu'
import AppReactApexCharts from '@/libs/styles/AppReactApexCharts'

const SalesState = () => {
  // Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      offsetY: -30,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -40,
        right: 0
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.7,
        opacityFrom: 0.5,
        shadeIntensity: 1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.6,
              color: theme.palette.primary.main
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: theme.palette.primary.main
      }
    },
    xaxis: {
      type: 'numeric',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    markers: {
      size: 1,
      offsetY: 1,
      offsetX: -5,
      strokeWidth: 5,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 8,
          seriesIndex: 0,
          dataPointIndex: 5,
          strokeColor: theme.palette.primary.main,
          fillColor: theme.palette.background.paper
        }
      ]
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: {
            height: 270
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Sales State'
        subheader='Total $42,580 Sales'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <AppReactApexCharts
        type='area'
        height={301}
        width='100%'
        options={options}
        series={[{ name: 'Traffic Rate', data: [300, 450, 390, 600, 550, 700] }]}
      />
    </Card>
  )
}

export default SalesState
