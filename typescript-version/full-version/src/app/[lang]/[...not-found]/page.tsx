// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import NotFound from '@views/NotFound'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { getServerMode } from '@core/server/actions'

const NotFoundPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = i18n.langDirection[params.lang]
  const mode = getServerMode()

  return (
    <Providers direction={direction}>
      <NotFound mode={mode} />
    </Providers>
  )
}

export default NotFoundPage
