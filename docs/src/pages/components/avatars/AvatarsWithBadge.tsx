// MUI Imports
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

// Image Imports
import avatar2 from '../../../../docs/assets/images/avatars/2.png'
import avatar4 from '../../../../docs/assets/images/avatars/4.png'

// Styled component for badge content area
const BadgeContentSpan = styled('span')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: 'var(--mui-palette-success-main)',
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)',
})

const AvatarsWithBadge = () => {
  return (
    <div className='flex gap-4'>
      <Badge
        overlap='circular'
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar alt='Marie Garza' src={avatar2} />
      </Badge>
      <Badge
        overlap='circular'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        badgeContent={
          <Avatar
            alt='Marie Garza'
            src={avatar2}
            className='bs-[1.375rem] is-[1.375rem] border-2 border-backgroundPaper'
          />
        }
      >
        <Avatar alt='Olivia Sparks' src={avatar4} />
      </Badge>
    </div>
  )
}

export default AvatarsWithBadge
