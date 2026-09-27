import './PersonalProjects.css';
import { personalProjects } from '../data/projectsData';

function PersonalProjects() {
  const handleNavigate = (link) => {
    window.history.pushState(null, '', link);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="personal-page">

      {/* PAGE HEADER */}

      <section className="personal-header">

        <h1>PERSONAL PROJECTS</h1>

        <div className="personal-line"></div>

      </section>


      {/* PROJECT GRID */}

      <section className="personal-grid">

        {personalProjects.map((project) => (

          <div
            className="personal-card"
            key={project.title}
            onClick={() => handleNavigate(project.link)}
          >

            <div className="personal-image">

              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  if (project.image.endsWith('.jpg')) {
                    e.currentTarget.src = project.image.replace('.jpg', '.svg');
                  }
                }}
              />

              <div className="personal-overlay">

                <div className="personal-overlay-content">

                  <h2>{project.title}</h2>

                  <p className="personal-description">
                    {project.description}
                  </p>

                  <p className="personal-technologies">
                    {project.technologies}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}

export default PersonalProjects;