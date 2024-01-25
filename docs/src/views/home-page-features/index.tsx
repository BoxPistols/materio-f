// React Imports
import React from 'react'

// Docusaurus Imports
import { useColorMode } from "@docusaurus/theme-common/internal"
import Admonition from '@theme/Admonition'

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
    imgLightSrc: require('@site/docs/assets/home-page-light-mui-nextjs.png').default,
    imgDarkSrc: require('@site/docs/assets/home-page-dark-mui-nextjs.png').default,
    imgAlt: 'MUI & Next.js',
    description: (
      <>
        With MUI & Next.js you can build responsive, mobile-first, and ARIA accessible projects on the web.
      </>
    ),
  },
  {
    title: 'Hooks Support',
    imgLightSrc: require('@site/docs/assets/home-page-light-hooks-support.png').default,
    imgDarkSrc: require('@site/docs/assets/home-page-dark-hooks-support.png').default,
    imgAlt: 'Hooks Support',
    description: (
      <>
        Hooks are functions that let you “hook into” React state and lifecycle features from function components.
      </>
    ),
  },
  {
    title: 'Next Auth & Translations',
    imgLightSrc: require('@site/docs/assets/home-page-light-next-auth-translations.png').default,
    imgDarkSrc: require('@site/docs/assets/home-page-dark-next-auth-translations.png').default,
    imgAlt: 'Next Auth & Translations',
    description: (
      <>
        With Next Auth you can utilize and auth service and with Translations you can translate your app to any language.
      </>
    ),
  },
]

const Feature = ({title, imgLightSrc, imgDarkSrc, imgAlt, description}: FeatureItem) => {
  // Hooks
  const { colorMode } = useColorMode()

  return (
    <div className='col col--4'>
      <div className="text--center">
        <img src={colorMode === 'dark' ? imgDarkSrc : imgLightSrc} alt={imgAlt} className='is-[350px]' />
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
