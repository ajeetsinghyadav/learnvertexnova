import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

export function DemoImage({ src, alt, contain = false }) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  const openLightbox = useCallback(() => {
    setReady(false);
    setOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setOpen(false), []);

  // Preload then reveal after next frame so image is painted before fade-in (reduces flicker)
  React.useEffect(() => {
    if (!open || !src) return;
    const img = new Image();
    const show = () => requestAnimationFrame(() => setReady(true));
    img.onload = show;
    img.onerror = show;
    img.src = src;
  }, [open, src]);

  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={clsx('demo-card-media-trigger', contain && 'demo-card-media-trigger--contain')}
        onClick={openLightbox}
        aria-label="Expand image"
      >
        <img
          src={src}
          alt={alt}
          className={clsx('demo-card-img', contain && 'demo-card-img--contain')}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </button>
      {open && (
        <div
          className={clsx('demo-lightbox-backdrop', ready && 'demo-lightbox-backdrop--visible')}
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === 'Escape' && closeLightbox()}
          role="button"
          tabIndex={0}
          aria-label="Close"
        >
          <div className="demo-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="demo-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <img src={src} alt={alt} className="demo-lightbox-img" />
          </div>
        </div>
      )}
    </>
  );
}

export function DemoVideo({ src }) {
  const videoRef = React.useRef(null);
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen?.();
      setFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setFullscreen(false);
    }
  }, []);

  React.useEffect(() => {
    const onFullscreenChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  return (
    <div className="demo-card-video-wrap">
      <video
        ref={videoRef}
        src={src}
        className="demo-card-video"
        controls
        loop
        muted
        playsInline
      />
      <button
        type="button"
        className="demo-card-video-expand"
        onClick={toggleFullscreen}
        aria-label="Fullscreen"
      >
        ⛶
      </button>
    </div>
  );
}

export default { DemoImage, DemoVideo };
