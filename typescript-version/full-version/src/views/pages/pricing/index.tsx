'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'
import type { Direction } from '@core/types'

// Component Imports
import Pricing from '@components/pricing'

// Style Imports
import styles from './styles.module.css'

const PricingPage = ({ data, direction }: { data: PricingPlanType[]; direction: Direction }) => {
  const isAboveXlScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'))
  const isBetweenSmXlScreen = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'xl'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Card>
      <CardContent
        className={classnames({
          '!pbs-10 !pbe-5 pli-5': isBelowSmScreen,
          [`${styles.padding} !plb-16`]: isAboveXlScreen,
          '!p-16': isBetweenSmXlScreen
        })}
      >
        <Pricing data={data} direction={direction} />
      </CardContent>
    </Card>
  )
}

export default PricingPage
