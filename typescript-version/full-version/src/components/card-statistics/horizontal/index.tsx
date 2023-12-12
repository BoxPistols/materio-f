// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Types Imports
import type { CardStatsHorizontalProps } from '@/types/pages/widgetTypes'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Style Imports
import commonStyles from '@/styles/common.module.css'

const CardStatHorizontal = (props: CardStatsHorizontalProps) => {
  const { title, stats, icon, color, trendNumber, trend } = props

  return (
    <Card
      className={classnames(
        'bg-transparent',
        commonStyles.border,
        commonStyles.borderRadius,
        commonStyles.boxShadowNone
      )}
    >
      <CardContent className='flex items-center gap-4'>
        <CustomAvatar
          variant='rounded'
          skin='light'
          color={color}
          className={classnames(commonStyles.paperColor, commonStyles.shadowXs)}
        >
          <i className={icon} />
        </CustomAvatar>
        <div>
          <Typography>{title}</Typography>
          <div className='flex items-center'>
            <Typography variant='h5'>{stats}</Typography>
            <div className='flex items-center'>
              <i
                className={classnames(
                  trend === 'up' ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line',
                  trend === 'up' ? commonStyles.successColor : commonStyles.errorColor
                )}
              ></i>
              <Typography color={trend === 'up' ? 'success.main' : 'error.main'}>{trendNumber}</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardStatHorizontal
