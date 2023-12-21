// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ResetPasswordV1 from '@views/pages/auth/ResetPasswordV1'

// Server Action Imports
import { getMode } from '@core/server/actions'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ResetPasswordV1Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const mode = getMode()

  return <ResetPasswordV1 direction={direction} mode={mode} />
}

export default ResetPasswordV1Page
