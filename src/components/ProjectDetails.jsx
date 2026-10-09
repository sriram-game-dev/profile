import NavBar from './NavBar';
import './ProjectDetails.css';
import { navigateTo } from '../utils/asset';

function ProjectDetails({ project }) {

  const handleBack = () => {
    if (window.history.length > 2) {
      window.history.back();
    } else {
      // Fallback if accessed directly via URL
      const isProfessional = [
        '/projects/loto-vr',
        '/projects/hose-manufacturing',
        '/projects/ai-virtual-tryon',
        '/projects/industrial-safety',
        '/projects/vr-paint',
        '/projects/f1-showroom',
        '/projects/factory-prototype'
      ].includes(project.link);

      const target = isProfessional ? '/professional' : '/personal';
      navigateTo(target);
    }
  };

  const renderList = (items) => {
    if (!items) return null;
    if (Array.isArray(items)) {
      return items.map((item, index) => (
        <li key={index}>{item}</li>
      ));
    }
    return <li>{items}</li>;
  };

  return (
    <>
      <NavBar />

      <main className="project-details-page">

        {/* PROJECT IMAGE */}

        <section className="project-details-image">

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

        </section>


        {/* PROJECT CONTENT */}

        <section className="project-details-content">

          <h1>
            {project.title}
          </h1>


          {/* OVERVIEW */}

          {project.overview && (
            <section className="project-details-section">

              <h2>
                Overview
              </h2>

              {project.links && (
                <div className="project-platform-links">
                  {project.links.map((item, idx) => (
                    <span key={item.label} className="platform-link-wrapper">
                      {idx > 0 && <span className="platform-divider">|</span>}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-platform-link"
                      >
                        {item.type === 'itch' && (
                          <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M2.5 5.5C2.1 6.1 2 7 2 8.3v7.4c0 1.5.8 2.8 2 2.8 1.4 0 2.2-1.2 2.7-2.3.6-1.3 1.2-2.7 1.8-2.7.6 0 1.2 1.4 1.8 2.7.5 1.1 1.3 2.3 2.7 2.3s2.2-1.2 2.7-2.3c.6-1.3 1.2-2.7 1.8-2.7.6 0 1.2 1.4 1.8 2.7.5 1.1 1.3 2.3 2.7 2.3 1.2 0 2-1.3 2-2.8V8.3c0-1.3-.1-2.2-.5-2.8-.7-.9-2.1-.9-3.3-.9H4.8c-1.2 0-1.6 0-2.3.9zM8 8.8c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2s-1.2-.5-1.2-1.2c0-.6.5-1.2 1.2-1.2zm8 0c.7 0 1.2.6 1.2 1.2 0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2c0-.6.5-1.2 1.2-1.2z" />
                          </svg>
                        )}
                        {item.type === 'github' && (
                          <svg className="platform-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        )}
                        <span>{item.label}</span>
                      </a>
                    </span>
                  ))}
                </div>
              )}

              <ul>
                {renderList(project.overview)}
              </ul>

            </section>
          )}


          {/* PROJECT CATEGORIES */}

          {project.categories && (
            <section className="project-details-section">

              <h2>
                {project.categoryTitle || 'Categories'}
              </h2>

              <ul>
                {renderList(project.categories)}
              </ul>

            </section>
          )}


          {/* FEATURES */}

          {project.feature && (
            <section className="project-details-section">

              <h2>
                Features
              </h2>

              <ul>
                {renderList(project.feature)}
              </ul>

            </section>
          )}


          {/* CONTRIBUTION */}

          {project.contribution && (
            <section className="project-details-section">

              <h2>
                My Contribution
              </h2>

              <ul>
                {renderList(project.contribution)}
              </ul>

            </section>
          )}


          {/* TECHNOLOGIES */}

          {project.technologies && (
            <section className="project-details-technologies">

              <h2>
                Technologies
              </h2>

              <p>
                {project.technologies}
              </p>

            </section>
          )}


          {/* BACK BUTTON */}

          <button
            className="project-back-button"
            onClick={handleBack}
          >
            ← Back to Projects
          </button>

        </section>

      </main>
    </>
  );
}

export default ProjectDetails;