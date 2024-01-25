// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img4 from '../../../../../docs/assets/images/cards/4.png'

const Img = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const CardHorizontalRatings = () => {

  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={6} lg={7}>
          <CardContent>
            <Typography variant='h5' className='mbe-2'>
              Stumptown Roasters
            </Typography>
            <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2'>
              <Rating name='read-only' value={4} readOnly />
              <Typography color='text.primary'>4 Star | 98 reviews</Typography>
            </div>
            <Typography>
              Before there was a United States of America, there were coffee houses, because how are you supposed to
              build.
            </Typography>
          </CardContent>
          <CardActions className='card-actions-dense'>
            <Button>Location</Button>
            <Button>Reviews</Button>
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          className='flex items-center justify-center md:order-[unset] -order-1'
        >
          <CardContent className='flex items-center justify-center'>
            <Img src={img4} height={175} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardHorizontalRatings
