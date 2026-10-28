import { useEffect, useState } from "react";
import { route } from "../utils/asset";
import HeroCanvasToy from "./HeroCanvasToy";

const AUDIENCES = [
  { id: 'all', label: 'All Projects', icon: '✦', role: 'Game & XR Dev', titleText: 'A Game Developer' },
  { id: 'games', label: 'Games', icon: '🎮', role: 'Gameplay Programmer', titleText: 'A Game Developer' },
  { id: 'xr', label: 'XR / VR', icon: '🥽', role: 'Spatial XR Engineer', titleText: 'An XR Developer' },
  { id: 'industrial', label: 'Industrial Training', icon: '🏭', role: 'Simulation Engineer', titleText: 'A Simulation Specialist' }
];

function Home({ activeAudience = 'all', onSelectAudience = () => {} }) {
  const [text, setText] = useState("A Gamer.");
  const [phase, setPhase] = useState("intro");
  const [showCursor, setShowCursor] = useState(false);

  const selectedAudience = AUDIENCES.find((a) => a.id === activeAudience) || AUDIENCES[0];

  const displayText = (phase === "done" && activeAudience !== 'all')
    ? selectedAudience.titleText
    : text;

  useEffect(() => {
    // Wait for the bottom → center animation
    const timer = setTimeout(() => {
      setPhase("backspace");
      setShowCursor(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "backspace") {
      let current = "A Gamer.";
      let delayTimer;

      const timer = setInterval(() => {
        current = current.slice(0, -1);
        setText(current);

        if (current === "A ") {
          clearInterval(timer);

          delayTimer = setTimeout(() => {
            setPhase("typing");
          }, 1000);
        }
      }, 80);

      return () => {
        clearInterval(timer);
        if (delayTimer) clearTimeout(delayTimer);
      };
    }

    if (phase === "typing") {
      const target = "A Game Developer";
      let index = 2;

      const timer = setInterval(() => {
        index++;
        setText(target.slice(0, index));

        if (index === target.length) {
          clearInterval(timer);
          setPhase("done");
          setShowCursor(false);
        }
      }, 80);

      return () => clearInterval(timer);
    }
  }, [phase]);

  return (
    <section className="home" id="home">
      <HeroCanvasToy />

      <div className="hero-status-badge" role="status" aria-live="polite">
        <span className="status-dot">
          <span className="status-dot-ping"></span>
          <span className="status-dot-core"></span>
        </span>
        <span className="status-badge-text">Available for Work · Full-time &amp; Contracts</span>
      </div>

      <span className="home-label">
        <span className="syntax-keyword">const</span> role = <span className="syntax-string">&quot;{selectedAudience.role}&quot;</span>;
      </span>

      <h1>SRIRAM S</h1>

      <p className="home-description">
        <span className="syntax-fn">player</span>.<span className="syntax-keyword">identity</span> = <span className="syntax-string">&quot;{displayText.replace(/^A\s+|^An\s+/, '')}&quot;</span>
        {showCursor && <span className="typing-cursor">_</span>}
      </p>

      <div className="home-links">
        <a
          href={route('/#projects')}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Explore Quests</span>
          <span style={{ color: '#0f172a' }}>→</span>
        </a>
        <a
          href={route('/#contact')}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Connect</span>
          <span style={{ color: '#8b5cf6' }}>✦</span>
        </a>
      </div>

      {/* AUDIENCE SWITCHER */}
      <div className="audience-switcher" role="radiogroup" aria-label="Audience focus filter">
        <span className="audience-switcher-label">I&apos;m looking for:</span>
        <div className="audience-pill-group">
          {AUDIENCES.map((aud) => (
            <button
              key={aud.id}
              type="button"
              role="radio"
              aria-checked={activeAudience === aud.id}
              className={`audience-pill ${activeAudience === aud.id ? 'active' : ''}`}
              onClick={() => onSelectAudience(aud.id)}
            >
              <span className="audience-icon" aria-hidden="true">{aud.icon}</span>
              <span>{aud.label}</span>
            </button>
          ))}
        </div>
      </div>


    </section>
  );
}

export default Home;