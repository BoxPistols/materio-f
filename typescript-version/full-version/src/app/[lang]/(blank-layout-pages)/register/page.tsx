// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Register from '@views/Register'

// Server Action Imports
import { getMode } from '@core/server/actions'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register to your account'
}

const RegisterPage = () => {
  const mode = getMode()

  return <Register mode={mode} />
}

export default RegisterPage
