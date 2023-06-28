'use client'

// React Imports
import type { ReactNode } from 'react'
import { useState } from 'react'

// Next Imports
import { useServerInsertedHTML } from 'next/navigation'

// Third-party Imports
import createCache from '@emotion/cache'
import { CacheProvider as DefaultCacheProvider } from '@emotion/react'
import type { EmotionCache, Options as OptionsOfCreateCache } from '@emotion/cache'

export type EmotionCacheProviderProps = {
  // eslint-disable-next-line lines-around-comment
  /* This is the options passed to createCache() from "import createCache from '@emotion/cache'" */
  options: Omit<OptionsOfCreateCache, 'insertionPoint'>

  /* By default <CacheProvider /> from "import { CacheProvider } from '@emotion/react'" */
  CacheProvider?: (props: { value: EmotionCache; children: ReactNode }) => JSX.Element | null
  children: ReactNode
}

const EmotionCacheProvider = (props: EmotionCacheProviderProps) => {
  const { options, CacheProvider = DefaultCacheProvider, children } = props

  const [{ cache, flush }] = useState(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const cache = createCache(options)

    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []

    cache.insert = (...args) => {
      const serialized = args[1]

      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }

      return prevInsert(...args)
    }

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const flush = () => {
      const prevInserted = inserted

      inserted = []

      return prevInserted
    }

    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()

    if (names.length === 0) {
      return null
    }
    let styles = ''

    // eslint-disable-next-line no-restricted-syntax
    for (const name of names) {
      styles += cache.inserted[name]
    }

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: styles
        }}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export default EmotionCacheProvider