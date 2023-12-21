// Component Imports
import NotAuthorized from '@views/NotAuthorized'

// Server Action Imports
import { getMode } from '@core/server/actions'

const Error401 = () => {
  const mode = getMode()

  return <NotAuthorized mode={mode} />
}

export default Error401
