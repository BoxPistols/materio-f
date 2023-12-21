// Component Imports
import TwoStepsV1 from '@views/pages/auth/TwoStepsV1'

// Server Action Imports
import { getMode } from '@core/server/actions'

const TwoStepsV1Page = () => {
  const mode = getMode()

  return <TwoStepsV1 mode={mode} />
}

export default TwoStepsV1Page
