// React Imports
import { useState } from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

// Image Imports
import avatar1 from '../../../../docs/assets/images/avatars/1.png'
import avatar2 from '../../../../docs/assets/images/avatars/2.png'
import avatar4 from '../../../../docs/assets/images/avatars/4.png'
import avatar5 from '../../../../docs/assets/images/avatars/5.png'

type ChipData = {
  key: number
  label: string
  avatar?: string
  avatarAlt?: string
}

const data: ChipData[] = [
  { key: 0, avatar: avatar1, avatarAlt: 'User Avatar', label: 'Norman Santiago' },
  { key: 1, avatar: avatar2, avatarAlt: 'User Avatar', label: 'Cecelia Tucker' },
  { key: 2, label: 'Max Burns' },
  { key: 3, avatar: avatar4, avatarAlt: 'User Avatar', label: 'Ellen Nguyen' },
  { key: 4, avatar: avatar5, avatarAlt: 'User Avatar', label: 'Edward Francis' }
];

const ChipsArray = () => {
  // States
  const [chipData, setChipData] = useState<ChipData[]>(data)

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  return (
    <div className='flex gap-4 flex-wrap'>
      {chipData.map(data => (
        <Chip
          key={data.key}
          label={data.label}
          avatar={<Avatar src={data.avatar} alt={data.avatarAlt} />}
          onDelete={data.key === 2 ? undefined : handleDelete(data)}
        />
      ))}
    </div>
  )
}

export default ChipsArray
