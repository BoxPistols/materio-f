// Component Imports
import LoginV1 from '@views/pages/auth/LoginV1'

// Server Action Imports
import { getServerMode } from '@core/server/actions'

const LoginV1Page = () => {
  const mode = getServerMode()

  return <LoginV1 mode={mode} />
}

export default LoginV1Page
