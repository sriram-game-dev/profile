import { useState, useEffect, useRef } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export default function KonamiEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [inputProgress, setInputProgress] = useState(0);
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Keyboard Konami Code listener
  useEffect(() => {
    let index = 0;

    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const expectedKey = KONAMI_SEQUENCE[index];
      const pressedKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (pressedKey === expectedKey.toLowerCase()) {
        index++;
        setInputProgress(index);
        if (index === KONAMI_SEQUENCE.length) {
          setIsOpen(true);
          index = 0;
          setInputProgress(0);
        }
      } else {
        // Reset if key doesn't match
        index = (pressedKey === KONAMI_SEQUENCE[0].toLowerCase()) ? 1 : 0;
        setInputProgress(index);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Retro 8-bit sound player (Synthesized via Web Audio, sound disabled by default)
  const playRetroChime = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C E G C E G
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.15);
      });
    } catch {
      // AudioContext unavailable or blocked
    }
  };

  // Canvas confetti animation on open
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f59e0b', '#8b5cf6', '#10b981', '#38bdf8', '#ec4899', '#ffffff'];
    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 3,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        // Draw pixel-style square confetti
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isOpen]);

  if (!isOpen) {
    // Show subtle visual helper in footer or when keys are being pressed
    if (inputProgress > 0) {
      return (
        <div className="konami-progress-pill" role="status" aria-live="polite">
          <span>🎮 KONAMI COMBO: {inputProgress}/10</span>
        </div>
      );
    }
    return null;
  }

  return (
    <div
      className="konami-overlay-backdrop"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Konami Code Easter Egg Modal"
    >
      <canvas ref={canvasRef} className="konami-canvas" aria-hidden="true" />

      <div
        className="konami-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="arcade-header">
          <span className="arcade-badge">CHEAT CODE ACTIVATED</span>
          <button
            type="button"
            className="arcade-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close easter egg"
          >
            ✕
          </button>
        </div>

        <div className="arcade-body">
          <div className="arcade-trophy">🏆</div>

          <h3 className="arcade-title">30 LIVES UNLOCKED</h3>
          <p className="arcade-subtitle">
            GOD MODE ENGAGED • RETRO GAMER ACHIEVEMENT UNLOCKED
          </p>

          <div className="arcade-specs">
            <div className="spec-item">
              <span className="spec-label">PHYSICS:</span>
              <span className="spec-val">PhysX Overclocked</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">XR REFRESH:</span>
              <span className="spec-val">120 Hz Stereo</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">ACTIVE BUILDS:</span>
              <span className="spec-val">20+ Shipped / In-Dev</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">EXPERIENCE:</span>
              <span className="spec-val">2+ Years Unity/C#</span>
            </div>
          </div>

          <p className="arcade-quote">
            &ldquo;You found the secret dev chamber! Whether you are building an indie title,
            a high-fidelity Quest simulation, or an interactive WebGL demo — let&apos;s build something exceptional together.&rdquo;
          </p>

          <div className="arcade-sound-row">
            <button
              type="button"
              className={`arcade-sound-btn ${soundEnabled ? 'sound-on' : ''}`}
              onClick={() => {
                const nextState = !soundEnabled;
                setSoundEnabled(nextState);
                if (nextState) playRetroChime();
              }}
            >
              {soundEnabled ? '🔊 8-Bit Chime: ON' : '🔇 8-Bit Chime: OFF (Click to enable)'}
            </button>
          </div>
        </div>

        <div className="arcade-footer">
          <button
            type="button"
            className="arcade-btn"
            onClick={() => setIsOpen(false)}
          >
            Return to Mission (ESC) ➔
          </button>
        </div>
      </div>
    </div>
  );
}
