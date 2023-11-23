import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const TypographyTexts = () => {
  return (
    <Card>
      <CardHeader title='Headings' />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Typography>subtitle1</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='subtitle1'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
            <Typography variant='body2'>font-size: 16px / line-height: 24px / font-weight: 500</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>subtitle2</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='subtitle2'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
            <Typography variant='body2'>font-size: 13px / line-height: 20px / font-weight: 500</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>body1</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='body1'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
            <Typography variant='body2'>font-size: 15px / line-height: 22px / font-weight: 400</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>body2</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='body2'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
            <Typography variant='body2'>font-size: 13px / line-height: 20px / font-weight: 400</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>button</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='button'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
            <Typography variant='body2'>
              font-size: 15px / line-height: 22px / font-weight: 500 / text-transform: none
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>caption</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='caption'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
            <Typography variant='body2'>font-size: 13px / line-height: 18px / font-weight: 400 / letter-spacing: 0.4px</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>overline</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='overline'>Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.</Typography>
            <Typography variant='body2'>
              font-size: 12px / line-height: 14px / font-weight: 400 / text-transform: uppercase / letter-spacing: 0.8px
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TypographyTexts
