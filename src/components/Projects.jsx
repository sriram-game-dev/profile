const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function Projects() {
  const handleNavigate = (e, path) => {
    e.preventDefault();
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          href="/professional"
          className="project-category"
          onClick={(e) => handleNavigate(e, '/professional')}
        >
          <div className="category-card">
            <img
              src={`${BASE}/projects/professional.jpg`}
              alt="Professional Projects"
              onError={handleImgError}
            />
            <span>PROFESSIONAL</span>
          </div>
        </a>


        {/* SIDEQUEST */}
        <a
          href="/personal"
          className="project-category"
          onClick={(e) => handleNavigate(e, '/personal')}
        >
          <div className="category-card">
            <img
              src={`${BASE}/projects/personal.jpg`}
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