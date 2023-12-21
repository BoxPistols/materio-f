// Component Imports
import RegisterV2 from '@views/pages/auth/RegisterV2'

// Server Action Imports
import { getMode } from '@core/server/actions'

const RegisterV2Page = () => {
  const mode = getMode()

  return <RegisterV2 mode={mode} />
}

export default RegisterV2Page
