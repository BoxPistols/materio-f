// MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'

// import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

// Styled TextField component
const TextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper
  }
}))

type Props = {
  searchValue: string
  setSearchValue: (value: string) => void
}

const FaqHeader = ({ searchValue, setSearchValue }: Props) => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Card className={classnames(styles.headerImage, 'bg-transparent bg-cover')} elevation={0}>
      <CardContent className={classnames(styles.headerPadding, 'flex flex-col items-center w-full text-center pli-5')}>
        <Typography variant='h4' color='primary' className='mbe-2.5'>
          Hello, how can we help?
        </Typography>
        <Typography className='mbe-6'>or choose a category to quickly find the help you need</Typography>
        <TextField
          fullWidth
          className={classnames(styles.searchBar, {
            [styles.inputWidth]: isBelowMdScreen,
            '!max-w-full': isBelowSmScreen
          })}
          variant='outlined'
          placeholder='Ask a question...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <i className='ri-search-line' />
              </InputAdornment>
            )
          }}
        />
      </CardContent>
    </Card>
  )
}

export default FaqHeader
