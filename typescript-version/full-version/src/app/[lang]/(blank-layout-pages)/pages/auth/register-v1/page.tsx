// Component Imports
import RegisterV1 from '@views/pages/auth/RegisterV1'

// Server Action Imports
import { getMode } from '@core/server/actions'

const RegisterV1Page = () => {
  const mode = getMode()

  return <RegisterV1 mode={mode} />
}

export default RegisterV1Page
