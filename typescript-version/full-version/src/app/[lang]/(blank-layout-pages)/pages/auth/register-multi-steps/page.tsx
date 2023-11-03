// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getDirection } from '@/utils/get-direction'

// Component Imports
import RegisterMultiSteps from '@views/pages/auth/register-multi-steps'

const RegisterMultiStepsPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <RegisterMultiSteps direction={direction} />
}

export default RegisterMultiStepsPage
