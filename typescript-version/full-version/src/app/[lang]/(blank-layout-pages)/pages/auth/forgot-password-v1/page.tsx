// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ForgotPasswordV1 from '@views/pages/auth/ForgotPasswordV1'

// Server Action Imports
import { getMode } from '@core/server/actions'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ForgotPasswordV1Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const mode = getMode()

  return <ForgotPasswordV1 direction={direction} mode={mode} />
}

export default ForgotPasswordV1Page
