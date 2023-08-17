// React Imports
import React, { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Third-party Imports
import { subDays, addDays } from 'date-fns'
import DatePicker from 'react-datepicker'

// Component Imports
import CustomInput from './PickersCustomInput'

const PickersCustomization = () => {
  // States
  const [dateFormat, setDateFormat] = useState<Date | null | undefined>(new Date())
  const [dateHighlight, setDateHighlight] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <DatePicker
          id='custom-format'
          selected={dateFormat}
          dateFormat='MMMM d, yyyy'
          onChange={(date: Date) => setDateFormat(date)}
          customInput={<CustomInput label='Custom Date Format' />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <DatePicker
          id='highlight-dates'
          selected={dateHighlight}
          onChange={(date: Date) => setDateHighlight(date)}
          customInput={<CustomInput label='Highlight Dates' />}
          highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        />
      </Grid>
    </Grid>
  )
}

export default PickersCustomization
