// Component Imports
import LoginV2 from '@views/pages/auth/LoginV2'

// Server Action Imports
import { getMode } from '@core/server/actions'

const LoginV2Page = () => {
  const mode = getMode()

  return <LoginV2 mode={mode} />
}

export default LoginV2Page
