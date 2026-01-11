import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Hero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            {siteConfig.tagline}
          </p>
          <div className={styles.heroButtons}>
            <Link className={clsx('button button--primary button--lg', styles.ctaButton)} to="/docs/intro">
              Get Started
            </Link>
            <Link className={clsx('button button--outline button--secondary button--lg', styles.ctaButton)} href="https://github.com/ajeetsinghyadav/vertexnova">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhatAndWhy() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.contentBlock}>
          <Heading as="h2" className={styles.sectionTitle}>What and Why</Heading>
          <p className={styles.sectionText}>
            VertexNova started as a learning journey in computer graphics and engine architecture. 
            VertexNova is a multi-backend rendering engine that you can use right now to learn, 
            experiment, and build 3D applications. We created VertexNova because we have a real 
            passion for understanding how graphics engines work, and we want to create a clean, 
            educational codebase that demonstrates modern engine design.
          </p>
          <p className={styles.sectionText}>
            Some features and tech:
          </p>
          <ul className={styles.featureList}>
            <li>Written in <strong>modern C++</strong> with support for Windows, Linux, macOS, iOS, and Web</li>
            <li><strong>Multi-backend rendering</strong> — Unified API across Vulkan, Metal, OpenGL, and WebGL</li>
            <li><strong>Cross-platform</strong> — Build once, run everywhere</li>
            <li><strong>Educational focus</strong> — Transparent architecture designed for learning</li>
            <li><strong>Clean abstractions</strong> — Thin layers with explicit control</li>
          </ul>
          <div className={styles.readMore}>
            <Link to="/docs/about">Read more on the About page →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: 'Multi-Backend Rendering',
      description: 'A unified API that works across Vulkan, Metal, OpenGL, and WebGL. Learn once, run everywhere.',
    },
    {
      title: 'Cross-Platform',
      description: 'Build on Windows, Linux, macOS, iOS, or Web. One codebase, multiple platforms.',
    },
    {
      title: 'Modern C++ Design',
      description: 'Clean architecture with strict ownership, predictable lifetimes, and clear abstractions.',
    },
  ];

  return (
    <section className={clsx(styles.section, styles.featuresSection)}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <Heading as="h3" className={styles.featureTitle}>{feature.title}</Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FuturePlans() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.contentBlock}>
          <Heading as="h2" className={styles.sectionTitle}>Future plans and direction</Heading>
          <p className={styles.sectionText}>
            We have some serious future plans.
          </p>
          <p className={styles.sectionText}>
            Firstly, one of our primary motivations for developing VertexNova is using it as a 
            learning platform and demonstrating modern engine architecture. That means we're 
            dedicated to ensuring that VertexNova is a well-documented, clean codebase capable 
            of teaching graphics programming concepts from the ground up.
          </p>
          <p className={styles.sectionText}>
            We also see VertexNova as a platform for education, experimentation, and real-time 
            applications. We regularly use it for visualization, creating interactive demos, and 
            exploring rendering techniques across different graphics APIs.
          </p>
          <div className={styles.readMore}>
            <Link to="/docs/docs/roadmap">See the Roadmap →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetAccess() {
  return (
    <section className={clsx(styles.section, styles.ctaSection)}>
      <div className="container">
        <div className={styles.ctaBlock}>
          <Heading as="h2" className={styles.ctaTitle}>Get Started with VertexNova</Heading>
          <p className={styles.ctaText}>
            VertexNova is <strong>open source</strong> and available on GitHub. Clone the repository, 
            build the engine, and start learning graphics programming today.
          </p>
          <div className={styles.ctaButtons}>
            <Link className={clsx('button button--primary button--lg', styles.ctaButton)} to="/docs/intro">
              Get Started
            </Link>
            <Link className={clsx('button button--outline button--secondary button--lg', styles.ctaButton)} href="https://github.com/ajeetsinghyadav/vertexnova">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - Multi-backend 3D Rendering Engine`}
      description="VertexNova Engine (VNE) is a modern, multi-platform rendering and visualization engine with unified API support for OpenGL, Metal, Vulkan, and WebGL. Built with C++ for clarity, portability, and performance.">
      <Hero />
      <main>
        <WhatAndWhy />
        <Features />
        <FuturePlans />
        <GetAccess />
      </main>
    </Layout>
  );
}
