'use client'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Components Imports
import ReactApexcharts from '@components/charts/apexchart'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

const RadialBarChart = () => {
  // Hooks
  const theme = useTheme()

  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    grid: {
      padding: {
        top: -10,
        bottom: 20
      }
    },
    stroke: {
      lineCap: 'square',
      curve: 'straight'
    },
    colors: [theme.palette.info.main],
    plotOptions: {
      radialBar: {
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '60%' },
        track: { background: theme.palette.customColors.trackBg },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 0,
            fontWeight: 500,
            fontSize: '1.25rem',
            color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 700,
        options: {
          grid: {
            padding: {
              left: 20,
              right: 20
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>135k</Typography>
        <ReactApexcharts type='radialBar' height={212} options={options} series={[78]} />
        <Typography color='text.primary' className='font-medium text-center'>
          Total Sales
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RadialBarChart