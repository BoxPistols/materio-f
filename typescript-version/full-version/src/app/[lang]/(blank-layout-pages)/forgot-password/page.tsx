// Next Imports
import type { Metadata } from 'next'

// Component Imports
import ForgotPassword from '@views/ForgotPassword'

// Server Action Imports
import { getMode } from '@core/server/actions'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Forgotten Password to your account'
}

const ForgotPasswordPage = () => {
  const mode = getMode()

  return <ForgotPassword mode={mode} />
}

export default ForgotPasswordPage
