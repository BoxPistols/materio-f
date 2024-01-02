// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import NotFound from '@views/NotFound'

// Util Imports
import { getDirection } from '@/utils/get-direction'
import { getServerMode } from '@core/server/actions'

const NotFoundPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const mode = getServerMode()

  return (
    <Providers direction={direction}>
      <NotFound mode={mode} />
    </Providers>
  )
}

export default NotFoundPage
