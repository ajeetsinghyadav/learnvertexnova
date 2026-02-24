import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

export function DemoImage({ src, alt, contain = false }) {
  const [open, setOpen] = useState(false);
  const openLightbox = useCallback(() => setOpen(true), []);
  const closeLightbox = useCallback(() => setOpen(false), []);

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
          className="demo-lightbox-backdrop"
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
