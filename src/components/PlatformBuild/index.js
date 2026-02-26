import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const PLATFORMS = [
  { value: 'macos', label: 'macOS', default: true },
  { value: 'ios', label: 'iOS' },
  { value: 'visionos', label: 'visionOS' },
  { value: 'windows', label: 'Windows' },
  { value: 'linux', label: 'Linux' },
  { value: 'web', label: 'Web' },
];

export default function PlatformBuild({ children }) {
  const childArray = React.Children.toArray(children);
  const panels = {};
  let defaultVal = 'macos';
  childArray.forEach((child) => {
    if (child.props?.value) {
      panels[child.props.value] = child;
      if (child.props.default) defaultVal = child.props.value;
    }
  });

  const [selected, setSelected] = useState(defaultVal);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1200);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <>
          <label className={styles.selectLabel}>Select platform:</label>
          <select
            className={styles.select}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            aria-label="Select build platform"
          >
            {PLATFORMS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          <div className={styles.content}>{panels[selected]?.props?.children}</div>
        </>
      ) : (
        <div className={styles.tabsContainer}>
          <div className={styles.tabList} role="tablist">
            {Object.keys(panels).map((val) => {
              const label = PLATFORMS.find((p) => p.value === val)?.label || val;
              return (
                <button
                  key={val}
                  role="tab"
                  aria-selected={selected === val}
                  className={clsx(styles.tab, selected === val && styles.tabActive)}
                  onClick={() => setSelected(val)}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className={styles.content}>{panels[selected]?.props?.children}</div>
        </div>
      )}
    </div>
  );
}

export function PlatformPanel({ value, children }) {
  return <div data-value={value}>{children}</div>;
}
