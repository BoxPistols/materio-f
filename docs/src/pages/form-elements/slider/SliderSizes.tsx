// MUI Imports
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderSizes = () => {
  return (
    <div>
      <Typography className='font-medium' color='text.primary'>Small</Typography>
      <Slider size='small' defaultValue={30} aria-labelledby='small-slider' />
      <Typography className='font-medium' color='text.primary'>Medium</Typography>
      <Slider defaultValue={30} aria-labelledby='medium-slider' />
    </div>
  )
}

export default SliderSizes
