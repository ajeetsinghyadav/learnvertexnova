/**
 * Draggable handle to resize the doc sidebar width (desktop only).
 * Updates --doc-sidebar-width; persists to localStorage.
 */
import React, {useState, useCallback, useEffect} from 'react';
import styles from './styles.module.css';

const STORAGE_KEY = 'docusaurus-doc-sidebar-width';
const MIN_WIDTH = 220;
const MAX_WIDTH = 480;
const DEFAULT_WIDTH = 300;

function getStoredWidth() {
  if (typeof window === 'undefined') return DEFAULT_WIDTH;
  try {
    const w = parseInt(localStorage.getItem(STORAGE_KEY), 10);
    if (Number.isFinite(w) && w >= MIN_WIDTH && w <= MAX_WIDTH) return w;
  } catch (_) {}
  return DEFAULT_WIDTH;
}

function setStoredWidth(px) {
  try {
    localStorage.setItem(STORAGE_KEY, String(px));
  } catch (_) {}
}

export default function SidebarResizeHandle() {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(DEFAULT_WIDTH);

  const setWidth = useCallback((px) => {
    const clamped = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, px));
    document.documentElement.style.setProperty('--doc-sidebar-width', `${clamped}px`);
    setStoredWidth(clamped);
  }, []);

  useEffect(() => {
    const stored = getStoredWidth();
    document.documentElement.style.setProperty('--doc-sidebar-width', `${stored}px`);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setWidth(newWidth);
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, startX, startWidth, setWidth]);

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    const w = document.documentElement.style.getPropertyValue('--doc-sidebar-width') || '';
    const current = parseInt(w, 10) || DEFAULT_WIDTH;
    setStartX(e.clientX);
    setStartWidth(current);
    setDragging(true);
  };

  return (
    <div
      className={styles.sidebarResizeHandle}
      onMouseDown={onMouseDown}
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize sidebar"
    />
  );
}
