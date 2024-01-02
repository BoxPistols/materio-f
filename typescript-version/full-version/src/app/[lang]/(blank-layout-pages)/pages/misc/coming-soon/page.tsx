// Component Imports
import ComingSoon from '@views/pages/misc/ComingSoon'

// Server Action Imports
import { getServerMode } from '@core/server/actions'

const ComingSoonPage = () => {
  const mode = getServerMode()

  return <ComingSoon mode={mode} />
}

export default ComingSoonPage
