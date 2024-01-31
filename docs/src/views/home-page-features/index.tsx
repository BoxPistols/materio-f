// React Imports
import React from 'react'

// Docusaurus Imports
import Admonition from '@theme/Admonition'
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

type FeatureItem = {
  title: string
  imgLightSrc: string
  imgDarkSrc: string
  imgAlt: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Based on MUI & Next.js',
    imgLightSrc: '/images/home-page/light-mui-nextjs.png',
    imgDarkSrc: '/images/home-page/dark-mui-nextjs.png',
    imgAlt: 'MUI & Next.js',
    description: (
      <>
        With MUI & Next.js you can build responsive, mobile-first, and ARIA accessible projects on the web.
      </>
    ),
  },
  {
    title: 'Hooks Support',
    imgLightSrc: '/images/home-page/light-hooks-support.png',
    imgDarkSrc: '/images/home-page/dark-hooks-support.png',
    imgAlt: 'Hooks Support',
    description: (
      <>
        Hooks are functions that let you “hook into” React state and lifecycle features from function components.
      </>
    ),
  },
  {
    title: 'Next Auth & Translations',
    imgLightSrc: '/images/home-page/light-next-auth-translations.png',
    imgDarkSrc: '/images/home-page/dark-next-auth-translations.png',
    imgAlt: 'Next Auth & Translations',
    description: (
      <>
        With Next Auth you can utilize and auth service and with Translations you can translate your app to any language.
      </>
    ),
  },
]

const Feature = ({title, imgLightSrc, imgDarkSrc, imgAlt, description}: FeatureItem) => {
  return (
    <div className='col col--4'>
      <div className="text--center">
        <ThemedImage
          alt={imgAlt}
          className='is-[350px]'
          sources={{ light: useBaseUrl(imgLightSrc), dark: useBaseUrl(imgDarkSrc) }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className='mbe-2'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className='flex items-center is-full plb-8 pli-4 mbe-8'>
      <div className="container">
        <Admonition type="warning" title='📣 Heads up' className='!mbe-8'>
          <p>You are viewing <strong>Next.js App Directory Routing</strong> documentation of Materio admin template. For <strong>Next.js Pages Directory Routing</strong> documentation, please visit <a href="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-old/documentation" target='_blank'>this page</a>.</p>
        </Admonition>
        <div className="row gap-y-4">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomepageFeatures
