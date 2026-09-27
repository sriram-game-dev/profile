import { useState, useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function About() {
  const [popup, setPopup] = useState(null);
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const animated = useRef(false);

  const handleImageError = (e) => {
    if (!e.currentTarget.dataset.errored) {
      e.currentTarget.dataset.errored = 'true';
      const src = e.currentTarget.src;
      if (src.includes('.jpg')) {
        e.currentTarget.src = src.replace('.jpg', '.svg');
      }
    }
  };

  useEffect(() => {
    const target = 20;
    const duration = 1500;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">

      <div className="about-layout">

        {/* LEFT SIDE - VISUALS */}
        <div className="about-highlights">

          {/* COMPLETED PROJECTS — counting animation */}
          <div
            ref={cardRef}
            className="about-highlight about-highlight--counter"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <div className="about-counter">
              <span className="about-counter-number">{count}</span>
              <span className="about-counter-plus">+</span>
            </div>
            <p>Finished Projects</p>
          </div>


          {/* CERTIFICATIONS & COURSES */}
          <div
            className="about-highlight about-highlight--icon"
            onClick={() => setPopup("certifications")}
          >
            <div className="about-card-icon-box">
              <svg className="about-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M12 18v-4"></path>
                <path d="M9 15l3 3 3-3"></path>
                <circle cx="12" cy="14" r="3"></circle>
              </svg>
            </div>
            <p>Certifications &amp; Courses</p>
          </div>


          {/* ACHIEVEMENTS */}
          <div
            className="about-highlight about-highlight--icon"
            onClick={() => setPopup("achievements")}
          >
            <div className="about-card-icon-box">
              <svg className="about-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34"></path>
                <path d="M18 4H6v7a6 6 0 0 0 12 0V4z"></path>
              </svg>
            </div>
            <p>Achievements</p>
          </div>


        </div>



        {/* CENTER LINE */}
        <div className="about-line"></div>


        {/* RIGHT SIDE - ABOUT CONTENT */}
        <div className="about-text">

          <p className="about-greeting">
            Hello there,
          </p>

          <h1>
            My name is <strong>S. Sriram</strong>
          </h1>

          <h2>Game Developer · XR Specialist</h2>

          <p>
            I specialize in game mechanics, game concepts, and immersive
            interactive experiences. Since 2023, I’ve been building production-ready
            applications using Unity and C#, primarily focusing on VR, AR, and MR.
          </p>

          <p>
            With experience delivering 20+ interactive projects across enterprise
            industrial simulation, VR safety training, interactive kiosk AR, and
            real-time 3D, I have shipped applications across PC, Android, WebGL,
            and Meta Quest. I am passionate about crafting engaging gameplay,
            fluid spatial interactions, and pushing the boundaries of real-time 3D technologies.
          </p>

        </div>

      </div>


      {/* ========================================
          CERTIFICATIONS & COURSES POPUP
      ======================================== */}

      {popup === "certifications" && (
        <div
          className="about-popup-overlay"
          onClick={() => setPopup(null)}
        >

          <div
            className="about-popup certification-popup"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              className="about-popup-close"
              onClick={() => setPopup(null)}
              aria-label="Close certifications and courses"
            >
              ×
            </button>


            <h2>Certifications & Courses</h2>


            <div className="certification-list">


              {/* ========================================
                  COURSE 1
              ======================================== */}

              <div className="certificate-item">

                <div className="certificate-image-wrapper">

                  <img
                    src={`${BASE}/images/certification2.jpg`}
                    alt="Diploma in 3D Game Development With Unity Engine"
                    onError={handleImageError}
                  />

                  <div className="certificate-description">

                    <p>
                      In-depth study of 3D game architecture in Unity, covering core C# game loops,
                      3D physics, lighting, animation controllers, and production asset integration.
                    </p>

                  </div>

                </div>


                <div className="certificate-info">

                  <h3>
                    Diploma in 3D Game Development With Unity Engine
                  </h3>

                  <p>
                    Completed through:{" "}
                    <a
                      href="https://alison.com/course/diploma-in-3d-game-development-with-unity-engine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Alison
                    </a>
                  </p>

                  <span>
                    2026
                  </span>

                  <small>
                    Course
                  </small>

                </div>

              </div>


              {/* ========================================
                  WEBINAR
              ======================================== */}

              <div className="certificate-item">

                <div className="certificate-image-wrapper">

                  <img
                    src={`${BASE}/images/webinar.jpg`}
                    alt="Game Development Webinar"
                    onError={handleImageError}
                  />

                  <div className="certificate-description">

                    <p>
                      Explored industry production pipelines, gameplay system design, performance
                      profiling, and optimization strategies for real-time interactive titles.
                    </p>

                  </div>

                </div>


                <div className="certificate-info">

                  <h3>
                    Game Development
                  </h3>

                  <p>
                    Attended through:{" "}
                    <a
                      href="https://monolith.academy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Monolith Academy
                    </a>
                  </p>

                  <span>
                    2026
                  </span>

                  <small>
                    Webinar
                  </small>

                </div>

              </div>


              {/* ========================================
                  CERTIFICATION 1
              ======================================== */}

              <div className="certificate-item">

                <div className="certificate-image-wrapper">

                  <img
                    src={`${BASE}/images/certification.jpg`}
                    alt="ChatGPT 101 Certification"
                    onError={handleImageError}
                  />

                  <div className="certificate-description">

                    <p>
                      Fundamentals of Large Language Models (LLMs), conversational AI workflows,
                      and practical techniques for accelerating development through generative AI tools.
                    </p>

                  </div>

                </div>


                <div className="certificate-info">

                  <h3>
                    ChatGPT 101 : What is ChatGPT?
                  </h3>

                  <p>
                    Issued by:{" "}
                    <a
                      href="https://www.simplilearn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Simplilearn
                    </a>
                  </p>

                  <span>
                    2026
                  </span>

                  <small>
                    Certification
                  </small>

                </div>

              </div>


              {/* ========================================
                  CERTIFICATION 2
              ======================================== */}

              <div className="certificate-item">

                <div className="certificate-image-wrapper">

                  <img
                    src={`${BASE}/images/certification3.jpg`}
                    alt="Introduction to Prompt Engineering"
                    onError={handleImageError}
                  />

                  <div className="certificate-description">

                    <p>
                      Prompt design methodologies, zero-shot and few-shot conditioning, and structured
                      AI orchestration for game development assistance and API-driven features.
                    </p>

                  </div>

                </div>


                <div className="certificate-info">

                  <h3>
                    Introduction to Prompt Engineering
                  </h3>

                  <p>
                    Issued by:{" "}
                    <a
                      href="https://www.simplilearn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Simplilearn
                    </a>
                  </p>

                  <span>
                    2026
                  </span>

                  <small>
                    Certification
                  </small>

                </div>

              </div>


              {/* ========================================
                  COURSE 2
              ======================================== */}

              <div className="certificate-item">

                <div className="certificate-image-wrapper">

                  <img
                    src={`${BASE}/images/course.jpg`}
                    alt="Create with Code Course"
                    onError={handleImageError}
                  />

                  <div className="certificate-description">

                    <p>
                      Official Unity foundation curriculum mastering C# programming, physics, player
                      controllers, audio integration, user interfaces, and cross-platform deployment.
                    </p>

                  </div>

                </div>


                <div className="certificate-info">

                  <h3>
                    Create with Code - Unity Learn
                  </h3>

                  <p>
                    Completed through:{" "}
                    <a
                      href="https://learn.unity.com/course/create-with-code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Unity Technologies
                    </a>
                  </p>

                  <span>
                    2023
                  </span>

                  <small>
                    Course
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ========================================
          ACHIEVEMENTS POPUP
      ======================================== */}

      {popup === "achievements" && (
        <div
          className="about-popup-overlay"
          onClick={() => setPopup(null)}
        >

          <div
            className="about-popup achievement-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="about-popup-close"
              onClick={() => setPopup(null)}
              aria-label="Close achievements"
            >
              ×
            </button>

            <h2>Achievements</h2>

            <div className="achievement-list">

              {/* ========================================
                  ACHIEVEMENT 1
              ======================================== */}

              <div className="achievement-item">

                <div className="achievement-image-wrapper">

                  <img
                    src={`${BASE}/images/award.jpg`}
                    alt="Esports Tournament Participation Certificate"
                    onError={handleImageError}
                  />

                  <div className="achievement-description">

                    <p>
                      Participated in a competitive esports championship for EA FC 26 and earned
                      a certificate of participation, demonstrating quick reflexes and high-pressure strategic execution.
                    </p>

                  </div>

                </div>


                <div className="achievement-info">

                  <h3>
                    Esports Tournament Participation
                  </h3>

                  <p>
                    Gen Z Level Up Laptop Gaming Championship
                  </p>

                  <span>
                    2026
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default About;