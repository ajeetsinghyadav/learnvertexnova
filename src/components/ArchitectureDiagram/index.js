import React from 'react';
import styles from './styles.module.css';

const LAYERS = [
  {
    id: 'app',
    num: 'L4',
    title: 'Application',
    subtitle: 'Programs that use the engine',
    cls: styles.lApp,
    items: [
      { label: 'Editor', note: 'Scene editor' },
      { label: 'Demos', note: 'Runnable examples' },
      { label: 'Tests', note: 'Test harness' },
      { label: 'Viewer', note: 'Asset viewer' },
    ],
  },
  {
    id: 'graphics',
    num: 'L3',
    title: 'Graphics Abstraction',
    subtitle: 'Multi-backend rendering',
    cls: styles.lGraphics,
    items: [
      { label: 'Rendering', note: 'Vulkan · Metal · OpenGL' },
      { label: 'Windowing', note: 'GLFW · iOS · Emscripten' },
      { label: 'Shaders', note: 'GLSL → SPIR-V → MSL/HLSL/WGSL' },
      { label: 'Visualisation', note: 'ECS · Materials · Scene' },
    ],
  },
  {
    id: 'core',
    num: 'L2',
    title: 'Core Systems',
    subtitle: 'Platform-independent utilities',
    cls: styles.lCore,
    items: [
      { label: 'Math', note: 'Vectors · Matrices · Quaternions' },
      { label: 'Logging', note: 'Structured · Thread-safe' },
      { label: 'Events', note: 'Typed event bus' },
      { label: 'I/O', note: 'File system · Assets' },
      { label: 'Scene', note: 'Scene graph · Transforms' },
      { label: 'Input', note: 'Keyboard · Mouse · Touch' },
    ],
  },
  {
    id: 'platform',
    num: 'L1',
    title: 'Platform',
    subtitle: 'APIs, libraries, hardware',
    cls: styles.lPlatform,
    items: [
      { label: 'Vulkan', note: 'Windows · Linux' },
      { label: 'Metal', note: 'macOS · iOS · visionOS' },
      { label: 'OpenGL', note: 'Desktop · Web (GLES)' },
      { label: 'SPIRV-Cross · GLM · GLFW · ImGui', note: 'Third-party libraries' },
    ],
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className={styles.root}>
      {LAYERS.map((layer, i) => (
        <React.Fragment key={layer.id}>
          <div className={`${styles.layer} ${styles[layer.id]}`}>
            <div className={styles.layerLabel}>
              <span className={styles.layerNum}>{layer.num}</span>
              <div>
                <div className={styles.layerTitle}>{layer.title}</div>
                <div className={styles.layerSubtitle}>{layer.subtitle}</div>
              </div>
            </div>
            <div className={styles.layerCards}>
              {layer.items.map((item) => (
                <div key={item.label} className={styles.card}>
                  <span className={styles.cardLabel}>{item.label}</span>
                  <span className={styles.cardNote}>{item.note}</span>
                </div>
              ))}
            </div>
          </div>
          {i < LAYERS.length - 1 && (
            <div className={styles.arrow}>
              <span className={styles.arrowLine} />
              <span className={styles.arrowHead}>▼</span>
              <span className={styles.arrowText}>depends on</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
