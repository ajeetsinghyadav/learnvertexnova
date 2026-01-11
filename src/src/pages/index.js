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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            Learn and build a <strong>multi-backend</strong> renderer (Vulkan · Metal · OpenGL · Web)
          </p>

          <div className={styles.heroChips}>
            <span className={styles.chip}>Cross-backend API design</span>
            <span className={styles.chip}>Real demos &amp; reference code</span>
            <span className={styles.chip}>Engineering insights &amp; architecture</span>
          </div>

          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start Learning
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/demos">
              Run a Demo
            </Link>
            <Link className="button button--link" to="https://github.com/ajeetsinghyadav/vertexnova">
              GitHub →
            </Link>
          </div>
        </div>

        <div className={styles.heroArt} aria-hidden="true">
          <img
            className={styles.heroLogo}
            src={useBaseUrl("img/logo-banner.svg")}
            alt=""
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}

function Section({title, subtitle, children}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            {title}
          </Heading>
          {subtitle ? <p className={styles.sectionSubtitle}>{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: 'Multi-backend, one mental model',
      body:
        'A clear, consistent API that maps to Vulkan/Metal/OpenGL — with explicit “what changes per backend” notes.',
      to: '/docs/intro',
      cta: 'Start with the basics',
    },
    {
      title: 'Demos as proof (and templates)',
      body:
        'Small, runnable demos that validate engine features. Each demo page explains what it tests and how to run it.',
      to: '/docs/demos',
      cta: 'Browse demos',
    },
    {
      title: 'Project Overview',
      body:
        'LearnOpenGL-style lessons + real-world engineering highlights (architecture, tradeoffs, debugging, performance).',
      to: '/docs/docs/overview',
      cta: 'View Overview',
    },
  ];

  return (
    <div className={styles.grid}>
      {features.map((f) => (
        <div key={f.title} className={styles.card}>
          <Heading as="h3" className={styles.cardTitle}>
            {f.title}
          </Heading>
          <p className={styles.cardBody}>{f.body}</p>
          <Link className={clsx('button button--sm button--secondary', styles.cardCta)} to={f.to}>
            {f.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}

function DemoGrid() {
  const demos = [
    {title: 'Textured Cube', body: 'Textures, samplers, UVs, basic pipeline.'},
    {title: 'Lighting', body: 'Basic shading, normals, materials.'},
    {title: 'MSAA', body: 'Multisample + resolve differences across APIs.'},
    {title: 'Offscreen RenderTarget', body: 'Render passes, attachments, compositing.'},
    {title: 'Instancing', body: 'Instance buffers, per-instance transforms.'},
    {title: 'ImGui Overlay', body: 'UI integration & debug tooling.'},
  ];

  return (
    <div className={styles.demoGrid}>
      {demos.map((d) => (
        <div key={d.title} className={styles.demoCard}>
          <Heading as="h3" className={styles.demoTitle}>
            {d.title}
          </Heading>
          <p className={styles.demoBody}>{d.body}</p>
          <Link className="button button--sm button--primary" to="/docs/demos">
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

function QuickStart() {
  return (
    <div className={styles.quickStart}>
      <div className={styles.quickStartText}>
        <Heading as="h3">Quickstart</Heading>
        <p className={styles.quickStartSubtitle}>
          The goal is “clone → build → run a demo”. Keep it boring and repeatable.
        </p>
        <pre className={styles.codeBlock}>
          <code>{`git clone https://github.com/ajeetsinghyadav/vertexnova.git
cd vertexnova
git submodule update --init --recursive

# build (example)
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j

# run a demo (see /docs/demos)
./build/bin/vertexnova_demo --help`}</code>
        </pre>
        <p className={styles.quickStartHint}>
          If you want your site to be the portfolio: keep every demo runnable with 1–2 commands.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="VertexNova Engine is a multi-backend 3D rendering and visualization engine (Vulkan, Metal, OpenGL, Web). Learn and build a cross-backend renderer with structured lessons and runnable demos.">
      <Hero />
      <main>
        <Section
          title="A simple, professional starting point"
          subtitle="Start with a clean landing page, a demos catalog, and a single 'Getting Started' lesson. Expand from there."
        >
          <FeatureGrid />
        </Section>

        <Section
          title="Demos"
          subtitle="Use demos as your public proof: each one should be runnable, documented, and mapped to a lesson."
        >
          <DemoGrid />
        </Section>

        <Section
          title="Get started"
          subtitle="The first impression matters. Make onboarding fast, predictable, and documented."
        >
          <QuickStart />
          <div className={styles.bottomCtas}>
            <Link className="button button--primary" to="/docs/intro">
              Read Getting Started
            </Link>
            <Link className="button button--secondary" to="/docs/roadmap">
              See Roadmap
            </Link>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
