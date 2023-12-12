// React Imports
import { useState } from 'react'

// MUI Imports
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderControlledUncontrolled = () => {
  // States
  const [value, setValue] = useState<number>(30)

  return (
    <div>
      <Typography className='font-medium' color='text.primary'>Controlled Slider</Typography>
      <Slider
        value={value}
        aria-labelledby='controlled-slider'
        onChange={(event, newValue: number | number[]) => setValue(newValue as number)}
      />
      <Typography className='font-medium' color='text.primary'>Uncontrolled Slider</Typography>
      <Slider defaultValue={30} aria-labelledby='uncontrolled-slider' />
    </div>
  )
}

export default SliderControlledUncontrolled
