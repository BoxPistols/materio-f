// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ResetPasswordV1 from '@views/pages/auth/ResetPasswordV1'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ResetPasswordV1Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <ResetPasswordV1 direction={direction} />
}

export default ResetPasswordV1Page
