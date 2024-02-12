// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CardStatVertical from '@components/card-statistics/Vertical'

const Vertical = ({ data }) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={4} lg={2} key={index}>
            <CardStatVertical {...item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Vertical
