import { useState } from 'react';

function PlayableDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Default playable demo link from Sriram's itch.io page
  // TODO: If you export a standalone Unity WebGL build into public/webgl/index.html, you can point this iframe to `${BASE_PATH}/webgl/index.html`
  const DEMO_URL = 'https://sriram-game-dev.itch.io/fly-away';

  const handleLaunch = () => {
    setIsLoading(true);
    setIsPlaying(true);
    // Simulate initial asset decompression state
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="playable-demo-section reveal-on-scroll">
      <div className="demo-header">
        <span className="section-label">LIVE GAMEPLAY PROTOTYPE</span>
        <h2>PLAYABLE WEBGL DEMO</h2>
        <div className="demo-header-line"></div>
      </div>

      <div className="demo-arcade-cabinet">
        {!isPlaying ? (
          <div className="demo-idle-screen">
            <div className="demo-badge-row">
              <span className="demo-pill-badge">Unity 2D</span>
              <span className="demo-pill-badge">C# Physics</span>
              <span className="demo-pill-badge">WebGL</span>
            </div>

            <h3 className="demo-game-title">FLY AWAY</h3>
            <p className="demo-game-desc">
              2D side-scrolling endless runner featuring procedural obstacles, responsive glide physics,
              object pooling, and score tracking. Experience the gameplay directly in your browser.
            </p>

            <div className="demo-controls-guide">
              <div className="control-key-item">
                <kbd>Space</kbd> or <kbd>Touch</kbd>
                <span>Fly / Flap Glide</span>
              </div>
              <div className="control-key-item">
                <kbd>P</kbd> or <kbd>Esc</kbd>
                <span>Pause Game</span>
              </div>
            </div>

            <button
              type="button"
              className="demo-launch-btn"
              onClick={handleLaunch}
              aria-label="Launch playable Unity WebGL demo"
            >
              <span className="play-triangle" aria-hidden="true">▶</span>
              <span>Launch Playable Demo</span>
            </button>

            <div className="demo-mobile-notice">
              <span className="notice-icon" aria-hidden="true">ℹ</span>
              <span>Best experienced on desktop with keyboard controls. Audio is off by default.</span>
            </div>
          </div>
        ) : (
          <div className="demo-active-container">
            <div className="demo-active-bar">
              <div className="demo-active-title">
                <span className="live-dot" aria-hidden="true"></span>
                <span>Fly Away — Live WebGL Session</span>
              </div>

              <div className="demo-bar-actions">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-fullscreen-btn"
                  aria-label="Open game full screen on itch.io"
                >
                  Full Screen ↗
                </a>
                <button
                  type="button"
                  className="demo-close-btn"
                  onClick={handleClose}
                  aria-label="Close playable demo"
                >
                  ✕ Close Session
                </button>
              </div>
            </div>

            {isLoading && (
              <div className="demo-loading-overlay">
                <div className="demo-spinner"></div>
                <p>Connecting to WebGL Runtime...</p>
              </div>
            )}

            <iframe
              src={DEMO_URL}
              title="Fly Away Unity WebGL Game Demo"
              className="demo-iframe"
              allow="autoplay; fullscreen; gamepad"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default PlayableDemo;
