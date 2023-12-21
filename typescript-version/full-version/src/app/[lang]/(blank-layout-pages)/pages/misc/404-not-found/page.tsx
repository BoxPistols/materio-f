// Component Imports
import NotFound from '@views/NotFound'

// Server Action Imports
import { getMode } from '@core/server/actions'

const Error = () => {
  const mode = getMode()

  return <NotFound mode={mode} />
}

export default Error
