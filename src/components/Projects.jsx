import { BASE_PATH, route, navigateTo } from '../utils/asset';

function Projects({ activeAudience = 'all', onSelectAudience = () => {} }) {
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

  const professionalCard = (
    <a
      key="prof"
      href={route('/professional')}
      className={`project-category ${activeAudience === 'industrial' ? 'category-featured' : ''}`}
      onClick={(e) => handleNavigate(e, '/professional')}
    >
      <div className="category-card">
        <img
          src={`${BASE_PATH}/projects/professional.jpg`}
          alt="Professional Projects"
          onError={handleImgError}
        />
        <span>PROFESSIONAL</span>
        {activeAudience === 'industrial' && (
          <div className="category-focus-tag">★ Industrial &amp; Enterprise VR</div>
        )}
      </div>
    </a>
  );

  const personalCard = (
    <a
      key="sidequest"
      href={route('/personal')}
      className={`project-category ${activeAudience === 'games' ? 'category-featured' : ''}`}
      onClick={(e) => handleNavigate(e, '/personal')}
    >
      <div className="category-card">
        <img
          src={`${BASE_PATH}/projects/sidequest.jpg`}
          alt="Sidequest Projects"
          onError={handleImgError}
        />
        <span>SIDEQUEST</span>
        {activeAudience === 'games' && (
          <div className="category-focus-tag">★ Indie &amp; Mobile Games</div>
        )}
      </div>
    </a>
  );

  // When 'games' is selected, place personal/game projects first
  const cards = activeAudience === 'games' ? [personalCard, professionalCard] : [professionalCard, personalCard];

  const focusLabels = {
    games: 'Games & Gameplay Prototypes',
    xr: 'Spatial Computing, AR & Meta Quest VR',
    industrial: 'Industrial Training Simulations & Enterprise LOTO'
  };

  return (
    <section id="projects" className="projects-section">

      <h2 className="projects-title reveal-on-scroll">MY WORK</h2>

      {activeAudience !== 'all' && (
        <div className="active-audience-banner reveal-on-scroll">
          <span className="banner-prefix">Curated Focus:</span>
          <strong>{focusLabels[activeAudience]}</strong>
          <button
            type="button"
            className="banner-reset-btn"
            onClick={() => onSelectAudience('all')}
            aria-label="Reset project filter to show all"
          >
            ✕ Reset to All
          </button>
        </div>
      )}

      <div className="project-categories reveal-on-scroll reveal-delay-1">
        {cards}
      </div>

    </section>
  );
}

export default Projects;