import './ProfessionalProjects.css';
import { projects } from '../data/projectsData';
import { navigateTo } from '../utils/asset';

function ProfessionalProjects() {
  const handleNavigate = (link) => {
    navigateTo(link);
  };

  return (
    <main className="professional-page">

      {/* PROFESSIONAL HEADER */}

      <section className="professional-header">

        <h1>PROFESSIONAL PROJECTS</h1>

        <div className="professional-line"></div>

      </section>


      {/* PROJECT GRID */}

      <section className="professional-grid">

        {projects.map((project) => (

          <div
            className="professional-card"
            key={project.title}
            role="button"
            tabIndex={0}
            aria-label={`View project details for ${project.title}`}
            onClick={() => handleNavigate(project.link)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigate(project.link);
              }
            }}
          >

            <div className="professional-image">

              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  if (!e.currentTarget.dataset.errored && project.image.endsWith('.jpg')) {
                    e.currentTarget.dataset.errored = 'true';
                    e.currentTarget.src = project.image.replace('.jpg', '.svg');
                  }
                }}
              />

              <div className="project-overlay">

                <div className="project-overlay-content">

                  <h2>{project.title}</h2>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <p className="project-technologies">
                    {project.technologies}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}


      </section>


      {/* NDA NOTICE */}

      <div className="nda-notice">

        <h3>Disclaimer and Professional Notice</h3>

        <p>
          The projects and case studies showcased on this portfolio website
          are for illustrative purposes only. Some work is protected under
          Non-Disclosure Agreements (NDAs), and any proprietary information
          has been excluded or anonymized. These materials are not intended
          for commercial use or redistribution.
        </p>

      </div>

    </main>
  );
}

export default ProfessionalProjects;
