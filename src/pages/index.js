import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/docs/demos">
            View Demos
          </Link>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/ajeetsinghyadav/vertexnova">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Multi-backend 3D Rendering Engine`}
      description="VertexNova Engine (VNE) is a modern, multi-platform rendering and visualization engine with unified API support for OpenGL, Metal, Vulkan, and WebGL. Built with C++ for clarity, portability, and performance.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
