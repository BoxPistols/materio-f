// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ResetPasswordV2 from '@views/pages/auth/ResetPasswordV2'

// Server Action Imports
import { getServerMode } from '@core/server/actions'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ResetPasswordV2Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const mode = getServerMode()

  return <ResetPasswordV2 mode={mode} direction={direction} />
}

export default ResetPasswordV2Page
