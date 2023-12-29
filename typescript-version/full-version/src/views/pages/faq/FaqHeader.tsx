// MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTextField from '@mui/material/TextField'

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
  return (
    <Card className='shadow-none bg-transparent bg-cover bg-[url("/images/pages/faq-header.png")]' elevation={0}>
      <CardContent className='flex flex-col items-center w-full text-center !pbs-[4.5625rem] !pbe-[5.9375rem] pli-5'>
        <Typography variant='h4' color='primary' className='mbe-2.5'>
          Hello, how can we help?
        </Typography>
        <Typography className='mbe-6'>or choose a category to quickly find the help you need</Typography>
        <TextField
          className='w-full sm:max-is-[55%] md:max-is-[600px]'
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
