// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Types Imports
import type { CardStatsVerticalProps } from '@/types/pages/widgetTypes'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

const CardStatVertical = (props: CardStatsVerticalProps) => {
  const { title, stats, avatarIcon, avatarColor, trendNumber, trend, subtitle, avatarSkin, avatarSize, moreOptions } =
    props

  return (
    <Card>
      <CardContent>
        <div className='flex justify-between is-full'>
          <CustomAvatar color={avatarColor} skin={avatarSkin} size={avatarSize}>
            <i className={avatarIcon} />
          </CustomAvatar>
          <OptionMenu
            {...(moreOptions
              ? moreOptions
              : {
                  options: ['Refresh', 'Share', 'Update'],
                  iconButtonProps: { className: 'text-textPrimary' }
                })}
          />
        </div>
        <div className='flex flex-col gap-1 pbs-5'>
          <Typography color='text.primary' className='font-medium'>
            {title}
          </Typography>
          <div className='flex gap-2 items-center'>
            <Typography variant='h4'>{stats}</Typography>
            <Typography color={trend === 'negative' ? 'error.main' : 'success.main'}>
              {`${trend === 'negative' ? '-' : '+'}${trendNumber}`}
            </Typography>
          </div>
          <Typography variant='body2'>{subtitle}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardStatVertical
