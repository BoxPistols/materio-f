// Component Imports
import VerifyEmailV1 from '@views/pages/auth/VerifyEmailV1'

// Server Action Imports
import { getMode } from '@core/server/actions'

const VerifyEmailV1Page = () => {
  const mode = getMode()

  return <VerifyEmailV1 mode={mode} />
}

export default VerifyEmailV1Page
