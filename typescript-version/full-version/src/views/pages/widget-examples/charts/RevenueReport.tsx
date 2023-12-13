'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Custom Components Imports
import OptionsMenu from '@core/components/option-menu'
import ReactApexcharts from '@components/charts/apexchart'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Style Imports
import commonStyles from '@/styles/common.module.css'

const series = [
  {
    name: 'Earning',
    data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
  },
  {
    name: 'Expense',
    data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
  }
]

const RevenueReport = () => {
  // Hook
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()

  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        right: 0
      }
    },
    legend: {
      offsetY: 6,
      fontSize: '15px',
      markers: { radius: 15, height: 10, width: 10, offsetX: theme.direction === 'rtl' ? 7 : -4 },
      itemMargin: { horizontal: 9 },
      labels: { colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`) }
    },
    stroke: {
      width: 3,
      colors: [theme.palette.background.paper]
    },
    dataLabels: { enabled: false },
    colors: [theme.palette.success.main, theme.palette.secondary.main],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '50%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all'
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
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: { show: false }
    },
    responsive: [
      {
        breakpoint: 1350,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '65%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: {
            height: 340
          },
          plotOptions: {
            bar: {
              borderRadius: 7,
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '30%'
            }
          }
        }
      },
      {
        breakpoint: 700,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '40%'
            }
          }
        }
      },
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55%'
            }
          }
        }
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 7,
              columnWidth: '60%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Revenue Report'
        action={
          <OptionsMenu iconClassName={commonStyles.textPrimary} options={['Last 28 Days', 'Last Month', 'Last Year']} />
        }
      />
      <CardContent>
        <ReactApexcharts type='bar' height={237} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default RevenueReport
