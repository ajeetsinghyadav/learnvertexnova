import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/* Simplified architecture — 4 layers, abstract labels, less granular */

/* Top (L4) depends on L3, L3 on L2, L2 on L1 — dependencies flow downward */
const LAYERS = [
  { id: 'app', num: 'L4', title: 'Application', cls: styles.lApp, items: ['Editor', 'Demos', 'Tests', 'Viewer'] },
  { id: 'graphics', num: 'L3', title: 'Graphics Abstraction', cls: styles.lGraphics, items: ['Rendering', 'Windowing', 'Shaders', 'Visualisation'] },
  { id: 'core', num: 'L2', title: 'Core Systems', cls: styles.lCore, items: ['Math', 'Logging', 'Events', 'I/O', 'Scene', 'Input'] },
  { id: 'platform', num: 'L1', title: 'Platform', cls: styles.lPlatform, items: ['Vulkan · Metal · OpenGL', 'SPIRV-Cross · GLM · GLFW', 'macOS · iOS · Windows · Linux · Web'] },
];

export default function ArchitectureDiagram() {
  return (
    <div className={styles.diagramWrapper}>
      <div className={styles.flowHint}>Dependencies flow downward ↑</div>
      <div className={styles.diagram}>
        {LAYERS.map((layer, i) => (
          <React.Fragment key={layer.id}>
            {i > 0 && (
              <div className={styles.connector}>
                <span className={styles.connectorArrow}>↑</span>
                <span className={styles.connectorLabel}>depends on</span>
              </div>
            )}
            <div className={clsx(styles.layer, layer.cls)}>
              <div className={styles.layerNum}>{layer.num}</div>
              <div className={styles.layerBlock}>
                <div className={styles.layerTitle}>{layer.title}</div>
                <div className={styles.layerItems}>
                  {layer.items.map((item) => (
                    <div key={item} className={styles.itemBlock}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#4a5568' }} />
            Core / Application
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: 'var(--ifm-color-primary)' }} />
            Graphics
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#718096' }} />
            Platform
          </div>
        </div>
      </div>
    </div>
  );
}
