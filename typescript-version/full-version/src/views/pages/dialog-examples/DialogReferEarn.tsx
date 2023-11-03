// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import ReferEarn from '@components/dialogs/refer-earn'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const DialogReferEarn = () => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Show'
  }

  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center gap-4'>
        <i className='ri-gift-line text-[32px]' />
        <Typography>Refer & Earn</Typography>
        <Typography>
          Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague.
        </Typography>
        <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={ReferEarn} />
      </CardContent>
    </Card>
  )
}

export default DialogReferEarn