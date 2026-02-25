import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const PRIVATE_LIBS = new Set([
  'vneeditor',
  'vnesamples',
  'vneviewer',
  'vnecrossgl',
  'vnecrosswin',
  'vnecrossviz',
  'vnecrossshader',
]);

const LAYERS = [
  {
    id: 'app',
    num: 'L6',
    title: 'Application Layer',
    badge: 'Top',
    cls: styles.lApp,
    cards: [
      { name: 'vneeditor', desc: 'Visual scene editor' },
      { name: 'vnesamples', desc: 'Demo applications' },
      { name: 'vnetestbed', desc: 'Test harness' },
      { name: 'vneviewer', desc: 'Standalone viewer' },
    ],
  },
  {
    id: 'graphics',
    num: 'L5',
    title: 'Graphics Abstraction',
    badge: 'Private',
    cls: styles.lGraphics,
    cards: [
      { name: 'vnecrossgl', desc: 'Cross-API renderer' },
      { name: 'vnecrosswin', desc: 'Window abstraction' },
      { name: 'vnecrossviz', desc: 'ECS visualisation' },
      { name: 'vnecrossshader', desc: 'Shader pipeline' },
    ],
  },
  {
    id: 'core',
    num: 'L4',
    title: 'Core Systems',
    badge: 'Foundation',
    cls: styles.lCore,
    cards: [
      { name: 'vnemath', desc: 'Math library' },
      { name: 'vnelogging', desc: 'Logging' },
      { name: 'vneevents', desc: 'Event system' },
      { name: 'vneio', desc: 'I/O utilities' },
      { name: 'vnecommon', desc: 'Shared types' },
      { name: 'vneutils', desc: 'Utilities' },
      { name: 'vnescene', desc: 'Scene graph' },
      { name: 'vneinteraction', desc: 'Input & interaction' },
    ],
  },
  {
    id: 'shared',
    num: 'L3',
    title: 'Shared Infrastructure',
    badge: 'Build & Test',
    cls: styles.lShared,
    cards: [
      { name: 'vnecmake', desc: 'CMake modules' },
      { name: 'vneresource', desc: 'Resource handles' },
      { name: 'vnetestbed', desc: 'Test framework' },
      { name: 'vnetemplate', desc: 'Library template' },
    ],
  },
  {
    id: 'deps',
    num: 'L2',
    title: 'External Dependencies',
    badge: 'Third-Party',
    cls: styles.lDeps,
    cards: [
      { name: 'Vulkan', desc: 'GPU API' },
      { name: 'Metal', desc: 'GPU API' },
      { name: 'OpenGL / GLES', desc: 'GPU API' },
      { name: 'SPIRV-Cross', desc: 'Shader transpiler' },
      { name: 'GLM', desc: 'Math' },
      { name: 'GLFW', desc: 'Windowing' },
      { name: 'ImGui', desc: 'Debug UI' },
      { name: 'CMake', desc: 'Build system' },
    ],
  },
  {
    id: 'hardware',
    num: 'L1',
    title: 'Hardware Platforms',
    badge: 'Physical',
    cls: styles.lHardware,
    cards: [
      { name: 'macOS', desc: 'Apple Silicon / Intel' },
      { name: 'iOS', desc: 'iPhone · iPad' },
      { name: 'visionOS', desc: 'Apple Vision Pro' },
      { name: 'Windows', desc: 'x64 Desktop' },
      { name: 'Linux', desc: 'x64 Desktop' },
      { name: 'Web', desc: 'Browser · WASM' },
    ],
  },
];

function Card({ name, desc }) {
  const isPrivate = PRIVATE_LIBS.has(name);
  return (
    <div
      className={clsx(styles.card, isPrivate && styles.cardPrivate)}
      title={isPrivate ? `${name} (private)` : name}
    >
      <span className={styles.cardName}>{name}</span>
      <span className={styles.cardDesc}>{desc}</span>
    </div>
  );
}

export default function ArchitectureDiagram() {
  return (
    <div className={styles.diagramWrapper}>
    <div className={styles.diagram}>
      {LAYERS.map((layer, i) => (
        <React.Fragment key={layer.id}>
          {i > 0 && <div className={styles.connector}>▲</div>}
          <div className={clsx(styles.layer, layer.cls)}>
            <div className={styles.layerInner}>
              <div className={styles.layerHeader}>
                <span className={styles.layerNum}>{layer.num}</span>
                <span className={styles.layerTitle}>{layer.title}</span>
                <span className={styles.layerBadge}>{layer.badge}</span>
              </div>
              <div className={styles.cards}>
                {layer.cards.map((card) => (
                  <Card key={card.name} name={card.name} desc={card.desc} />
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#4a5568' }} />
          Application
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: 'var(--ifm-color-primary)' }} />
          Graphics
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#4a5568' }} />
          Core
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#718096' }} />
          External
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#718096' }} />
          Hardware
        </div>
        <div className={styles.legendDivider} />
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: 'transparent', border: '2px dashed #636366' }} />
          Private
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#4a5568' }} />
          Public
        </div>
      </div>
    </div>
    </div>
  );
}
