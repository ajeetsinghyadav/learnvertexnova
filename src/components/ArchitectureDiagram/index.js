import React from 'react';
import styles from './styles.module.css';

const LAYERS = [
  {
    id: 'app',
    num: 'L4',
    title: 'Application',
    subtitle: 'Programs that use the engine',
    headerCls: styles.headerApp,
    cardCls: styles.cardApp,
    rowCls: styles.rowApp,
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
    headerCls: styles.headerGraphics,
    cardCls: styles.cardGraphics,
    rowCls: styles.rowGraphics,
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
    headerCls: styles.headerCore,
    cardCls: styles.cardCore,
    rowCls: styles.rowCore,
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
    headerCls: styles.headerPlatform,
    cardCls: styles.cardPlatform,
    rowCls: styles.rowPlatform,
    items: [
      { label: 'Vulkan', note: 'Windows · Linux · macOS (MoltenVK)' },
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
          <div className={`${styles.row} ${layer.rowCls}`}>
            <div className={`${styles.layerHeader} ${layer.headerCls}`}>
              <span className={styles.layerNum}>{layer.num}</span>
              <div>
                <div className={styles.layerTitle}>{layer.title}</div>
                <div className={styles.layerSubtitle}>{layer.subtitle}</div>
              </div>
            </div>
            <div className={styles.layerCards}>
              {layer.items.map((item) => (
                <div key={item.label} className={`${styles.card} ${layer.cardCls}`}>
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
