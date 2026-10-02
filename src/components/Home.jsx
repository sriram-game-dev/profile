import { useEffect, useState } from "react";
import { route } from "../utils/asset";

function Home() {
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

      const timer = setInterval(() => {
        current = current.slice(0, -1);
        setText(current);

        if (current === "A ") {
          clearInterval(timer);

          setTimeout(() => {
            setPhase("typing");
          }, 1000);
        }
      }, 80);

      return () => clearInterval(timer);
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

      <span className="home-label">
        <span className="syntax-keyword">const</span> role = <span className="syntax-string">&quot;Game &amp; XR Dev&quot;</span>;
      </span>

      <h1>SRIRAM S</h1>

      <p className="home-description">
        <span className="syntax-fn">player</span>.<span className="syntax-keyword">identity</span> = <span className="syntax-string">&quot;{text.replace(/^A\s+/, '')}&quot;</span>
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


    </section>
  );
}

export default Home;