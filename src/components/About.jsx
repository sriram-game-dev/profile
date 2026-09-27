import { useState, useEffect, useRef } from "react";

function About() {
  const [popup, setPopup] = useState(null);
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const animated = useRef(false);

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
            className="about-highlight"
            onClick={() => setPopup("certifications")}
          >
            <img
              src="/images/certification.jpg"
              alt="Certifications and Courses"
              onError={(e) => { if (e.currentTarget.src.endsWith('.jpg')) e.currentTarget.src = e.currentTarget.src.replace('.jpg', '.svg'); }}
            />

            <p>Certifications &amp; Courses</p>
          </div>


          {/* ACHIEVEMENTS */}
          <div
            className="about-highlight"
            onClick={() => setPopup("achievements")}
          >
            <img
              src="/images/award.jpg"
              alt="Achievement"
              onError={(e) => { if (e.currentTarget.src.endsWith('.jpg')) e.currentTarget.src = e.currentTarget.src.replace('.jpg', '.svg'); }}
            />

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
                    src="/images/certification2.jpg"
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
                    src="/images/webinar.jpg"
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
                    src="/images/certification.jpg"
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
                    src="/images/certification3.jpg"
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
                    src="/images/course.jpg"
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
                    src="/images/award.jpg"
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