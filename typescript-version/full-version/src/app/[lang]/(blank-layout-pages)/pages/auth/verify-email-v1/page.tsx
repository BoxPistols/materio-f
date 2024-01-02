// Component Imports
import VerifyEmailV1 from '@views/pages/auth/VerifyEmailV1'

// Server Action Imports
import { getServerMode } from '@core/server/actions'

const VerifyEmailV1Page = () => {
  const mode = getServerMode()

  return <VerifyEmailV1 mode={mode} />
}

export default VerifyEmailV1Page
