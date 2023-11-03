'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

// Type Imports
import type { ProfileTeamsTechType, ProfileConnectionsType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'

// Style Imports
import styles from '../styles.module.css'
import commonStyles from '@/styles/common.module.css'

type Props = {
  teamsTech?: ProfileTeamsTechType[]
  connections?: ProfileConnectionsType[]
}

const ConnectionsTeams = (props: Props) => {
  // props
  const { teamsTech, connections } = props

  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            title='Connections'
            action={<OptionMenu options={['Share Connections', 'Suggest Edits', { divider: true }, 'Report Bug']} />}
          />
          <CardContent className='flex flex-col gap-4'>
            {connections &&
              connections.map((connection, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <div className='flex items-center flex-grow gap-2'>
                    <Avatar src={connection.avatar} className={styles.avatarSize} />
                    <div className='flex flex-grow flex-col gap-1'>
                      <Typography variant='body2' className={commonStyles.textPrimary}>
                        {connection.name}
                      </Typography>
                      <Typography variant='caption'>{connection.connections} Connections</Typography>
                    </div>
                  </div>
                  <Button
                    variant={connection.isFriend ? 'contained' : 'outlined'}
                    size='small'
                    className='w-9 h-9 min-w-0 p-1.5'
                  >
                    <i className={connection.isFriend ? 'ri-user-3-line' : 'ri-user-add-line'} />
                  </Button>
                </div>
              ))}
            <div className='text-center'>
              <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                View all connections
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader
            title='Teams'
            action={<OptionMenu options={['Share Teams', 'Suggest Edits', { divider: true }, 'Report Bug']} />}
          />
          <CardContent className='flex flex-col gap-4'>
            {teamsTech &&
              teamsTech.map((team: ProfileTeamsTechType, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <div className='flex flex-grow items-center gap-2'>
                    <Avatar src={team.avatar} />
                    <div className='flex flex-grow flex-col gap-1'>
                      <Typography variant='body2' className={commonStyles.textPrimary}>
                        {team.title}
                      </Typography>
                      <Typography variant='caption'>{team.members} Members</Typography>
                    </div>
                  </div>
                  <Chip variant='tonal' color={team.ChipColor} label={team.chipText} size='small' />
                </div>
              ))}
            <div>
              <div className='text-center'>
                <Typography href='/' component={Link} onClick={e => e.preventDefault()} color='primary'>
                  View all teams
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ConnectionsTeams
