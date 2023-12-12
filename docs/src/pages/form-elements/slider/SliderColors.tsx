// MUI Imports
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const SliderColors = () => {
  return (
    <div>
      <Typography className='font-medium' color='text.primary'>Secondary Slider</Typography>
      <Slider defaultValue={30} color='secondary' aria-labelledby='secondary-slider' />
      <Typography className='font-medium' color='text.primary'>Error Slider</Typography>
      <Slider defaultValue={30} color='error' aria-labelledby='error-slider' />
      <Typography className='font-medium' color='text.primary'>Warning Slider</Typography>
      <Slider defaultValue={30} color='warning' aria-labelledby='warning-slider' />
      <Typography className='font-medium' color='text.primary'>Info Slider</Typography>
      <Slider defaultValue={30} color='info' aria-labelledby='info-slider' />
      <Typography className='font-medium' color='text.primary'>Success Slider</Typography>
      <Slider defaultValue={30} color='success' aria-labelledby='success-slider' />
    </div>
  )
}

export default SliderColors
