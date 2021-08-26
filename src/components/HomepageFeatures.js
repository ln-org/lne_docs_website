import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="home.features.easyToUse.title">Easy to Use</Translate>,
    Svg: require('../../static/img/undraw_active_options.svg').default,
    description: (
      <Translate id="home.features.easyToUse.desc">
        LINK was designed from the ground up to be easily installed and used to manage your keyboard conveniently.
      </Translate>
    ),
  },
  {
    title: <Translate id="home.features.multifunctional.title">Multifunctional</Translate>,
    Svg: require('../../static/img/undraw_location_search.svg').default,
    description: (
      <Translate id="home.features.multifunctional.desc">
        LINK provides a variety of functions, and continuous iteration gives it more possibilities.
      </Translate>
    ),
  },
  {
    title: <Translate id="home.features.excellentCompatibility.title">Excellent compatibility</Translate>,
    Svg: require('../../static/img/undraw_real_time_sync.svg').default,
    description: (
      <Translate id="home.features.excellentCompatibility.desc">
        Link has excellent compatibility, allowing you to easily control multiple keyboards and their keymaps.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
  );
}
