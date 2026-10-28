import { useEffect, useRef } from 'react';
import { navigateTo } from '../utils/asset';

function CaseStudyDrawer({ project, onClose }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {
    problem: project.overview?.[0] || 'High-stakes interactive training scenario requiring real-time simulation.',
    role: project.contribution?.[0] || 'Core Interaction & Systems Developer',
    tech: project.technologies || 'Unity · C#',
    challenge: project.overview?.[1] || 'Optimizing VR/3D interactions and frame budget on target hardware.',
    result: project.feature?.[0] || 'Successfully delivered modular interactive project.'
  };

  return (
    <div
      className="case-study-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        ref={drawerRef}
        className="case-study-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* DRAWER HEADER */}
        <div className="case-study-header">
          <div className="case-study-header-meta">
            <span className="case-study-type-tag">{project.type || 'Interactive Project'}</span>
            <span className="case-study-category-tag">
              {project.link.includes('projects') ? 'Case Study' : 'Prototype'}
            </span>
          </div>

          <button
            type="button"
            className="case-study-close-btn"
            onClick={onClose}
            aria-label="Close case study panel"
          >
            ×
          </button>
        </div>

        {/* HERO TITLE & IMAGE */}
        <div className="case-study-hero">
          <img
            src={project.image}
            alt={project.title}
            className="case-study-hero-img"
          />
          <h2 id="case-study-title" className="case-study-title">
            {project.title}
          </h2>
          <p className="case-study-lead-desc">{project.description}</p>
        </div>

        {/* 5 CORE PILLARS OF THE CASE STUDY */}
        <div className="case-study-pillars">
          {/* 1. Problem */}
          <section className="pillar-card pillar-problem">
            <div className="pillar-icon-row">
              <span className="pillar-icon">🎯</span>
              <h3>The Problem &amp; Objective</h3>
            </div>
            <p>{caseStudy.problem}</p>
          </section>

          {/* 2. My Role */}
          <section className="pillar-card pillar-role">
            <div className="pillar-icon-row">
              <span className="pillar-icon">🛠️</span>
              <h3>My Role &amp; Contributions</h3>
            </div>
            <p><strong>{caseStudy.role}</strong></p>
            {project.contribution && (
              <ul className="pillar-bullets">
                {project.contribution.slice(0, 3).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            )}
          </section>

          {/* 3. Tech Stack */}
          <section className="pillar-card pillar-tech">
            <div className="pillar-icon-row">
              <span className="pillar-icon">⚡</span>
              <h3>Tech Stack &amp; Tools</h3>
            </div>
            <p className="pillar-tech-string">{caseStudy.tech}</p>
            <div className="pillar-chips">
              {project.techList?.map((t) => (
                <span key={t} className="pillar-tech-chip">{t}</span>
              ))}
              {project.platforms?.map((p) => (
                <span key={p} className="pillar-platform-chip">{p}</span>
              ))}
            </div>
          </section>

          {/* 4. Challenge */}
          <section className="pillar-card pillar-challenge">
            <div className="pillar-icon-row">
              <span className="pillar-icon">🧩</span>
              <h3>Engineering Challenge</h3>
            </div>
            <p>{caseStudy.challenge}</p>
          </section>

          {/* 5. Result */}
          <section className="pillar-card pillar-result">
            <div className="pillar-icon-row">
              <span className="pillar-icon">🏆</span>
              <h3>Result &amp; Impact</h3>
            </div>
            <p>{caseStudy.result}</p>
          </section>
        </div>

        {/* EXTERNAL PLATFORM LINKS OR FULL SPEC */}
        <div className="case-study-actions">
          {project.links?.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-action-btn primary"
            >
              <span>Play / View on {item.label} ➜</span>
            </a>
          ))}

          <button
            type="button"
            className="case-study-action-btn secondary"
            onClick={() => {
              onClose();
              navigateTo(project.link);
            }}
          >
            Read Full Documentation Page ➜
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyDrawer;

