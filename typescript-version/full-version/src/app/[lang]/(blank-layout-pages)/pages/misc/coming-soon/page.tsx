// Component Imports
import ComingSoon from '@views/pages/misc/ComingSoon'

// Server Action Imports
import { getMode } from '@core/server/actions'

const ComingSoonPage = () => {
  const mode = getMode()

  return <ComingSoon mode={mode} />
}

export default ComingSoonPage
