// React Imports
import React from 'react'

// Style Imports
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Based on MUI & Next.js',
    Svg: require('@site/static/images/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        With MUI & Next.js you can build responsive, mobile-first, and ARIA accessible projects on the web.
      </>
    ),
  },
  {
    title: 'Hooks Support',
    Svg: require('@site/static/images/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hooks are functions that let you “hook into” React state and lifecycle features from function components.
      </>
    ),
  },
  {
    title: 'Next Auth & Translations',
    Svg: require('@site/static/images/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With Next Auth you can utilize and auth service and with Translations you can translate your app to any language.
      </>
    ),
  },
]

const Feature = ({title, Svg, description}: FeatureItem) => {
  return (
    <div className='col col--4'>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomepageFeatures
