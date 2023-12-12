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

const radialBarColors = {
  series1: '#fdd835',
  series2: '#32baff',
  series3: '#00d4bd',
  series4: '#7367f0',
  series5: '#FFA1A1'
}

const ApexRadialBarChart = () => {
  // Hooks
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  const textSecondary = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)

  const options: ApexOptions = {
    stroke: { lineCap: 'round' },
    labels: ['Comments', 'Replies', 'Shares'],
    legend: {
      show: true,
      fontSize: '13px',
      position: 'bottom',
      labels: {
        colors: textSecondary
      },
      markers: {
        height: 10,
        width: 10,
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series4],
    plotOptions: {
      radialBar: {
        hollow: { size: '30%' },
        track: {
          margin: 15,
          background: theme.palette.customColors.trackBg
        },
        dataLabels: {
          name: {
            fontSize: '2rem'
          },
          value: {
            fontSize: '15px',
            fontWeight: 500,
            color: textSecondary
          },
          total: {
            show: true,
            fontWeight: 500,
            label: 'Comments',
            fontSize: '1.125rem',
            color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`),
            formatter: function (w) {
              const totalValue =
                w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b
                }, 0) / w.globals.series.length

              if (totalValue % 1 === 0) {
                return totalValue + '%'
              } else {
                return totalValue.toFixed(2) + '%'
              }
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30
      }
    }
  }

  return (
    <Card>
      <CardHeader title='Statistics' />
      <CardContent>
        <ReactApexcharts type='radialBar' height={400} options={options} series={[80, 50, 35]} />
      </CardContent>
    </Card>
  )
}

export default ApexRadialBarChart
