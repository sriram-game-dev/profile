import { BASE_PATH, route, navigateTo } from '../utils/asset';

function Projects() {
  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigateTo(path);
  };

  // Safe onError: only swap .jpg→.svg once, never loop
  const handleImgError = (e) => {
    if (!e.currentTarget.dataset.errored) {
      e.currentTarget.dataset.errored = 'true';
      const src = e.currentTarget.src;
      if (src.endsWith('.jpg')) {
        e.currentTarget.src = src.replace('.jpg', '.svg');
      }
    }
  };

  return (
    <section id="projects" className="projects-section">

      <h2 className="projects-title">MY WORK</h2>

      <div className="project-categories">

        {/* PROFESSIONAL */}
        <a
          href={route('/professional')}
          className="project-category"
          onClick={(e) => handleNavigate(e, '/professional')}
        >
          <div className="category-card">
            <img
              src={`${BASE_PATH}/projects/professional.jpg`}
              alt="Professional Projects"
              onError={handleImgError}
            />
            <span>PROFESSIONAL</span>
          </div>
        </a>


        {/* SIDEQUEST */}
        <a
          href={route('/personal')}
          className="project-category"
          onClick={(e) => handleNavigate(e, '/personal')}
        >
          <div className="category-card">
            <img
              src={`${BASE_PATH}/projects/sidequest.jpg`}
              alt="Sidequest Projects"
              onError={handleImgError}
            />

            <span>SIDEQUEST</span>
          </div>
        </a>

      </div>

    </section>
  );
}

export default Projects;