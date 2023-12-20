// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import type { ButtonProps } from '@mui/material/Button'

// Component Imports
import AddNewAddress from '@components/dialogs/add-edit-address'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  country: 'US',
  address1: '100 Water Plant Avenue,',
  address2: 'Building 1303 Wake Island',
  landmark: 'Near Water Plant',
  city: 'New York',
  state: 'Capholim',
  zipCode: '403114',
  taxId: 'TAX-875623',
  vatNumber: 'SDF754K77',
  contact: '+1(609) 933-44-22'
}

const BillingAddress = () => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Edit Address',
    size: 'small',
    startIcon: <i className='ri-add-line' />
  }

  return (
    <>
      <Card>
        <CardHeader
          title='Billing Address'
          action={
            <OpenDialogOnElementClick
              element={Button}
              elementProps={buttonProps}
              dialog={AddNewAddress}
              dialogProps={{ data }}
            />
          }
        />
        <CardContent>
          <Grid container>
            <Grid item xs={12} md={6}>
              <table>
                <tbody className='align-top'>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Name:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{`${data.firstName} ${data.lastName}`}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Billing Email:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.email}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Tax ID:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.taxId}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        VAT Number:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.vatNumber}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Billing Address:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{`${data.address1} ${data.address2}`}</Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
            <Grid item xs={12} md={6}>
              <table>
                <tbody className='align-top'>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Contact:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.contact}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Landmark:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.landmark}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Landmark:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.city}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Country:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.country}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        State:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.state}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-1 pis-0 is-[150px]'>
                      <Typography variant='subtitle2' color='text.primary'>
                        Zip Code:
                      </Typography>
                    </td>
                    <td className='p-1'>
                      <Typography variant='body2'>{data.zipCode}</Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default BillingAddress
