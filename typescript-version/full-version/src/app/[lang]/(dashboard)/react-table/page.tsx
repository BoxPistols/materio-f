// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component imports
import BasicDataTables from '@views/react-table/BasicDataTables'
import EditableDataTables from '@views/react-table/EditableDataTables'
import ColumnVisibility from '@views/react-table/ColumnVisibility'
import RowSelection from '@views/react-table/RowSelection'
import KitchenSink from '@views/react-table/KitchenSink'

// Style Imports
import styles from '@/styles/link.module.css'

const Tables = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5'>React Table</Typography>
        <Typography variant='body2'>
          <code>@tanstack/react-table</code> is a third-party library. Please refer to its{' '}
          <Link href='https://tanstack.com/table/' target='_blank' rel='noopener noreferrer' className={styles.link}>
            official documentation
          </Link>{' '}
          for more details.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <BasicDataTables />
      </Grid>
      <Grid item xs={12}>
        <EditableDataTables />
      </Grid>
      <Grid item xs={12}>
        <ColumnVisibility />
      </Grid>
      <Grid item xs={12}>
        <RowSelection />
      </Grid>
      <Grid item xs={12}>
        <KitchenSink />
      </Grid>
    </Grid>
  )
}

export default Tables
