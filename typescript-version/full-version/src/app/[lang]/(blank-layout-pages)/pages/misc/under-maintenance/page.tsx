// Component Imports
import UnderMaintenance from '@views/pages/misc/UnderMaintenance'

// Server Action Imports
import { getMode } from '@core/server/actions'

const UnderMaintenancePage = () => {
  const mode = getMode()

  return <UnderMaintenance mode={mode} />
}

export default UnderMaintenancePage
