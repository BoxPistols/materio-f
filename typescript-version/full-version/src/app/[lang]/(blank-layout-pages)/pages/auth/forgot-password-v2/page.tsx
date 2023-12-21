// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ForgotPasswordV2 from '@views/pages/auth/ForgotPasswordV2'

// Server Action Imports
import { getMode } from '@core/server/actions'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ForgotPasswordV2Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const mode = getMode()

  return <ForgotPasswordV2 direction={direction} mode={mode} />
}

export default ForgotPasswordV2Page
