// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CardStatWithImage from '@components/card-statistics/Character'

const Character = ({ data }) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <CardStatWithImage {...item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Character
