// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ForgotPasswordV1 from '@views/pages/auth/ForgotPasswordV1'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ForgotPasswordV1Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <ForgotPasswordV1 direction={direction} />
}

export default ForgotPasswordV1Page
