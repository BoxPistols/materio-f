// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import NotFound from '@views/NotFound'

// Server Action Imports
import { getMode } from '@core/server/actions'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const cookieStore = cookies()
  const mode = getMode()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return (
    <Providers settingsCookie={settingsCookie} direction={direction}>
      <NotFound mode={mode} />
    </Providers>
  )
}

export default Page
