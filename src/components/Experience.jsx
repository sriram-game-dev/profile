import { useState } from "react";
import { route } from "../utils/asset";

function Experience() {

  const [popup, setPopup] = useState(null);

  const handleOpenPopup = (type) => {
    setPopup(type);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setPopup(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="experience" className="experience backstory-section">

      {/* SECTION HEADER (GERLOGU STYLE) */}
      <div className="experience-header">
        <span className="section-label">CAREER &amp; JOURNEY</span>
        <h1>My Backstory</h1>
        <div className="experience-header-line"></div>
      </div>



      {/* TIMELINE CONTAINER */}
      <div className="experience-content">

        <div className="experience-timeline">

          {/* Glowing central timeline axis */}
          <div className="experience-line"></div>

          {/* ========================================
              ENTRY 1 - JUNIOR ENGINEER (XR DEV)
          ======================================== */}
          <div className="experience-item experience-right">

            <div className="experience-dot" aria-hidden="true">
              <span className="dot-pulse"></span>
            </div>

            <div className="experience-details backstory-card">
              <div className="card-badge-row">
                <span className="backstory-role-tag">PRODUCTION ROLE</span>
                <span className="experience-year">2024 – 2026</span>
              </div>

              <h2>Junior Engineer (XR Development)</h2>

              <p className="experience-company">
                Hema Enterprises (HEPL) · Digifox Studio
              </p>

              <p className="experience-description">
                Developed and delivered production-grade VR, AR, and MR interactive simulations
                in Unity &amp; C#. Built modular gameplay systems, spatial interfaces, and
                high-fidelity environments across Meta Quest, Android, and PC platforms.
              </p>

              {/* TECH PILLS */}
              <div className="backstory-tech-tags">
                <span>Unity 3D</span>
                <span>C# OOP</span>
                <span>Meta Quest</span>
                <span>XR Toolkit</span>
                <span>Optimization</span>
              </div>

              {/* GERLOGU RAYEN-STYLE BUTTON */}
              <button
                type="button"
                className="backstory-rayen-btn"
                onClick={() => handleOpenPopup("work")}
              >
                <span className="btn-inner">
                  <span className="btn-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </span>
                  <span className="btn-text">View Details</span>
                  <span className="btn-arrow">➜</span>
                </span>
              </button>
            </div>

          </div>


          {/* ========================================
              ENTRY 2 - INDEPENDENT GAME DEVELOPER
          ======================================== */}
          <div className="experience-item experience-left">

            <div className="experience-dot" aria-hidden="true">
              <span className="dot-pulse"></span>
            </div>

            <div className="experience-details backstory-card">
              <div className="card-badge-row">
                <span className="backstory-role-tag">GAME DEV &amp; R&amp;D</span>
                <span className="experience-year">2023 – Present</span>
              </div>

              <h2>Independent Game Developer</h2>

              <p className="experience-company">
                Personal Projects &amp; Prototyping
              </p>

              <p className="experience-description">
                Designing and programming original gameplay mechanics, state machines,
                physics-driven movement controllers, and real-time interaction systems.
                Rapidly turning concept art and game design documents into playable titles.
              </p>

              {/* TECH PILLS */}
              <div className="backstory-tech-tags">
                <span>Gameplay Systems</span>
                <span>State Machines</span>
                <span>3D Physics</span>
                <span>Rapid Prototyping</span>
              </div>

              {/* GERLOGU RAYEN-STYLE BUTTON */}
              <button
                type="button"
                className="backstory-rayen-btn"
                onClick={() => handleOpenPopup("personal")}
              >
                <span className="btn-inner">
                  <span className="btn-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </span>
                  <span className="btn-text">View Details</span>
                  <span className="btn-arrow">➜</span>
                </span>
              </button>
            </div>

          </div>




      </div>


      {/* ========================================
          POPUP 1: WORK EXPERIENCE MODAL
      ======================================== */}
      {popup === "work" && (
        <div className="experience-popup-overlay" onClick={handleClosePopup}>
          <div className="experience-popup" onClick={(e) => e.stopPropagation()}>

            <button
              className="experience-popup-close"
              onClick={handleClosePopup}
              aria-label="Close work experience"
            >
              ×
            </button>

            <h2>Junior Engineer (XR Development)</h2>

            <p className="experience-popup-company">
              Hema Enterprises Private Limited · Digifox Studio
              <span className="experience-popup-year">(2024 – 2026)</span>
            </p>

            <div className="experience-popup-header-line"></div>

            <div className="experience-popup-content">

              <h3>Role Overview</h3>
              <p>
                Worked at HEPL as a Junior Engineer within Digifox Studio, specializing in Unity and C# development.
                Architected and deployed VR, AR, and MR applications, delivering gameplay systems, interactive simulation
                scenarios, intuitive user interfaces, and immersive spatial mechanics across PC, Android, and Meta Quest headsets.
              </p>

              <h3>Core Responsibilities &amp; Impact</h3>
              <ul>
                <li>Developed interactive simulation modules using Unity C# with high-performance standards.</li>
                <li>Implemented gameplay mechanics, UI/UX flows, animation timelines, VFX, audio, and live-operations systems.</li>
                <li>Leveraged modern AI tools for coding, debugging, automated testing, and rapid prototyping.</li>
                <li>Collaborated seamlessly with 3D artists, UI/UX designers, backend engineers, and QA teams.</li>
                <li>Profiled and optimized standalone VR scenes to maintain 72–90 FPS framerate targets.</li>
                <li>Engineered cross-platform deployments tailored for Meta Quest 2/3/Pro, Android, and PC.</li>
              </ul>

              <div className="popup-footer-actions">
                <a
                  href="#projects"
                  className="popup-cta-btn"
                  onClick={() => {
                    handleClosePopup();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Related Projects ➜
                </a>
              </div>

            </div>

          </div>
        </div>
      )}


      {/* ========================================
          POPUP 2: PERSONAL PROJECTS & PROTOTYPING
      ======================================== */}
      {popup === "personal" && (
        <div className="experience-popup-overlay" onClick={handleClosePopup}>
          <div className="experience-popup" onClick={(e) => e.stopPropagation()}>

            <button
              className="experience-popup-close"
              onClick={handleClosePopup}
              aria-label="Close personal projects"
            >
              ×
            </button>

            <h2>Independent Game Developer</h2>

            <p className="experience-popup-company">
              Personal Projects &amp; Gameplay R&amp;D
              <span className="experience-popup-year">(2023 – Present)</span>
            </p>

            <div className="experience-popup-header-line"></div>

            <div className="experience-popup-content">

              <h3>Philosophy &amp; Focus</h3>
              <p>
                Driven by a love for indie game craft and mechanical depth. I design and build playable prototypes
                focusing on tight controls, responsive player feedback, custom character controllers, and modular architecture.
              </p>

              <h3>Key Highlights</h3>
              <ul>
                <li>Designed original mechanics from concept to playable vertical slices in Unity.</li>
                <li>Authored modular state machines for enemy AI, player movement, and ability systems.</li>
                <li>Experimented with procedural generation, physics-based interactions, and custom shaders.</li>
                <li>Explored gameplay feel, game juice, screen shake, hit pause, and particle feedback loops.</li>
                <li>Prepared builds for WebGL and PC standalone distribution on itch.io and GitHub.</li>
              </ul>

              <div className="popup-footer-actions">
                <a
                  href={route('/#projects')}
                  className="popup-cta-btn"
                  onClick={() => {
                    handleClosePopup();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse Game Projects ➜
                </a>
              </div>


            </div>

          </div>
        </div>
      )}


      
        </div>

    </section>
  );
}

export default Experience;

