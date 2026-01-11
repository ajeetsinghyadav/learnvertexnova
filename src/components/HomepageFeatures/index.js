import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi-Backend Rendering',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        VertexNova provides a unified API across multiple graphics backends:
        OpenGL Desktop, OpenGL ES/WebGL, Metal, and Vulkan (WIP). Write once,
        run everywhere.
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Built for modern C++ with support for macOS, iOS, Windows, Linux, and Web.
        Clean architecture with strict ownership and predictable lifetimes.
      </>
    ),
  },
  {
    title: 'Modern C++ Design',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Designed for long-term maintainability with simple layering, explicit control,
        and incremental progress. Focus on clarity, portability, and steady evolution.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        <div className="padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
