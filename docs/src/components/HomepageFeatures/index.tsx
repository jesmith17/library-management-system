import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  illustration?: string;
};

// [
//     {
//         title: 'Hands-On Experiences',
//         illustration: 'img/coding.png',
//         description: `
//         Learn by doing, not by reading.
//     `,
//     },
//     {
//         title: 'Amazing Instructors',
//         illustration: 'img/highfive.png',
//         description: `
//         Build it with the help of our amazing instructors, or just do it on your own.
//     `,
//     },
//     {
//         title: 'Take-Home Material',
//         illustration: 'img/writing.png',
//         description: `
//         Take home the material and keep learning.
//     `,
//     },


const featureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    illustration: 'img/coding.png',
      // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Learn by doing, not by reading.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    illustration: 'img/highfive.png',
    description: (
      <>
          Build it with the help of our amazing instructors, or just do it on your own.
      </>
    ),
  },
  {
    title: 'Take Home Material',
      illustration: 'img/writing.png',
      description: `
        Take home the material and keep learning.`

    },
];

function Feature({title, Svg, description, illustration}: FeatureItem) {
  if (Svg) {
      return (
          <div className={clsx('col col--4')}>
              <div className="text--center">
                  <Svg className={styles.featureSvg} role="img"/>
              </div>
              <div className="text--center padding-horiz--md">
                  <Heading as="h3">{title}</Heading>
                  <p>{description}</p>
              </div>
          </div>
      );
  } else {
      return (<div className={clsx('col col--4')}>
          <div className="text--center">
              <img
                  src={illustration}
                  className={styles.featureSvg}
                  width="450px"
                  height="100%"
                  role="img"
                  alt=""
              />
          </div>
          <div className="text--center padding-horiz--md">
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
          </div>
      </div>
      );
  }
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
