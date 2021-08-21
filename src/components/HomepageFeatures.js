import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="home.features.easyToUse.title">Easy to Use</Translate>,
    Svg: require('../../static/img/undraw_maintenance.svg').default,
    description: (
      <Translate id="home.features.easyToUse.desc">
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </Translate>
    ),
  },
  {
    title: <Translate id="home.features.multifunctional.title">Multifunctional</Translate>,
    Svg: require('../../static/img/undraw_location_search.svg').default,
    description: (
      <Translate id="home.features.multifunctional.desc">
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the directory.
      </Translate>
    ),
  },
  {
    title: <Translate id="home.features.excellentCompatibility.title">Excellent compatibility</Translate>,
    Svg: require('../../static/img/undraw_code_typing.svg').default,
    description: (
      <Translate id="home.features.excellentCompatibility.desc">
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
