import { useEffect, useState } from "react";
import { route } from "../utils/asset";
import HeroCanvasToy from "./HeroCanvasToy";

const FOCUS_AREAS = [
  { id: 'all', label: 'All Projects', icon: '✦' },
  { id: 'games', label: 'Games', icon: '🎮' },
  { id: 'game-design', label: 'Game Design', icon: '🎲' },
  { id: 'xr', label: 'XR', icon: '🥽' },
  { id: 'industrial', label: 'Industrial Training', icon: '🏭' }
];

function Home({ activeAudience = 'all', onSelectAudience = () => {} }) {
  const [text, setText] = useState("A Gamer.");
  const [phase, setPhase] = useState("intro");
  const [showCursor, setShowCursor] = useState(false);

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

      <h1>SRIRAM S</h1>

      <p className="home-description">
        <span className="syntax-fn">player</span>.<span className="syntax-keyword">identity</span> = <span className="syntax-string">&quot;{text.replace(/^A\s+|^An\s+/, '')}&quot;</span>
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

      {/* WHAT I DO FILTER */}
      <div className="audience-switcher" role="radiogroup" aria-label="What I do">
        <span className="audience-switcher-label">What I do:</span>
        <div className="audience-pill-group">
          {FOCUS_AREAS.map((area) => (
            <button
              key={area.id}
              type="button"
              role="radio"
              aria-checked={activeAudience === area.id}
              className={`audience-pill ${activeAudience === area.id ? 'active' : ''}`}
              onClick={() => onSelectAudience(area.id)}
            >
              <span className="audience-icon" aria-hidden="true">{area.icon}</span>
              <span>{area.label}</span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Home;
