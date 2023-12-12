// MUI Imports
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderBasic = () => {
  return (
    <div>
      <Typography className='font-medium' color='text.primary'>Default Slider</Typography>
      <Slider defaultValue={30} aria-labelledby='continuous-slider' />
      <Typography className='font-medium' color='text.primary'>Disabled Slider</Typography>
      <Slider disabled defaultValue={30} aria-labelledby='disabled-slider' />
    </div>
  )
}

export default SliderBasic
