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
              if (project.image.endsWith('.jpg')) {
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