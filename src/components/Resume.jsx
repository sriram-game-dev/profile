import { route } from '../utils/asset';

function Resume() {
  return (
    <section id="resume" className="resume">

      <div className="resume-header">
        <span className="section-label">CURRICULUM VITAE</span>
        <h2 style={{ color: '#f8fafc', fontSize: 'clamp(1rem, 5vw, 3rem)', fontWeight: 700, margin: '15px 0 0' }}>
          RESUME
        </h2>
      </div>

      <div className="resume-content">

        <p>
          A comprehensive summary of my experience in Unity and C#, game programming,
          enterprise XR simulations, platforms, and technical skill set.
        </p>

        <div className="resume-links">

          <a
            href={route('/resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button primary"
          >
            View Resume →
          </a>

          <a
            href={route('/resume.pdf')}
            download="Sriram_S_Resume.pdf"
            className="resume-button secondary"
          >
            Download Resume ↓
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;