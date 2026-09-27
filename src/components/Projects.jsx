function Projects() {
  const handleNavigate = (e, path) => {
    e.preventDefault();
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              src="/projects/professional.jpg"
              alt="Professional Projects"
              onError={(e) => {
                e.currentTarget.src = '/projects/professional.svg';
              }}
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
              src="/projects/personal.jpg"
              alt="Sidequest Projects"
              onError={(e) => {
                e.currentTarget.src = '/projects/personal.svg';
              }}
            />

            <span>SIDEQUEST</span>

          </div>
        </a>

      </div>

    </section>
  );
}

export default Projects;