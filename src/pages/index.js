import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const demoVideo = useBaseUrl('/img/demos/hero_montage.mp4');

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <video
        className={styles.heroVideo}
        src={demoVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className={styles.heroOverlay} />
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
            <Link className={clsx('button button--outline button--secondary button--lg', styles.ctaButton)} href="https://github.com/vertexnova">
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
            experiment, and build 3D applications. I created VertexNova because I have a real 
            passion for understanding how graphics engines work, and I want to create a clean, 
            educational codebase that demonstrates modern engine design.
          </p>
          <p className={styles.sectionText}>
            Thanks to everyone who supported my growth along the way — mentors, colleagues, and those who believed in the journey.
          </p>
          <p className={styles.sectionText}>
            Some features and tech:
          </p>
          <ul className={styles.featureList}>
            <li>Written in <strong>modern C++</strong> with support for Windows, Linux, macOS, iOS, and Web</li>
            <li><strong>Multi-backend rendering</strong> — Unified API across Vulkan, Metal, OpenGL, OpenGL ES 3.0, and WebGPU</li>
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
      description: 'A unified API that works across Vulkan, Metal, OpenGL, OpenGL ES 3.0, and WebGPU. Learn once, run everywhere.',
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
          <Heading as="h2" className={styles.sectionTitle}>Roadmap</Heading>
          <p className={styles.sectionText}>
            <strong>Phase 1</strong> (in progress): Stabilise, test, document — modular libraries, CI/CD, new demos (OIT, picking, text, multi-viewport).
          </p>
          <p className={styles.sectionText}>
            <strong>Phase 2</strong> (planned): ECS runtime, material system, scene graph, visual editor with viewport and asset browser.
          </p>
          <p className={styles.sectionText}>
            <strong>Future horizons:</strong> Animation (skeletal meshes, GPU skinning), XR & spatial (OpenXR, visionOS), performance (GPU-driven rendering, LOD, cascaded shadows), scripting & assets (C# bridge, GLTF importer).
          </p>
          <div className={styles.readMore}>
            <Link to="/docs/docs/roadmap">Full Roadmap →</Link>
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
            <Link className={clsx('button button--outline button--secondary button--lg', styles.ctaButton)} href="https://github.com/vertexnova">
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
      description="VertexNova Engine (VNE) is a modern, multi-platform rendering and visualization engine with unified API support for Vulkan, Metal, OpenGL, OpenGL ES 3.0, and WebGPU. Built with C++ for clarity, portability, and performance.">
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
