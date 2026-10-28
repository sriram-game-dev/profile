import { useState, useMemo } from 'react';
import { route, navigateTo } from '../utils/asset';
import { allProjects } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import CaseStudyDrawer from './CaseStudyDrawer';

const PLATFORMS = ['All', 'Meta Quest', 'Android', 'PC', 'WebGL'];
const TECHS = ['All', 'Unity', 'C#', 'Meta SDK', 'AR Foundation', 'Shader Graph'];
const TYPES = ['All', 'Training Simulation', 'Game', 'AR Experience', 'Virtual Showroom'];

function Projects({ activeAudience = 'all', onSelectAudience = () => {} }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const focusLabels = {
    games: 'Games & Gameplay Prototypes',
    xr: 'Spatial Computing, AR & Meta Quest VR',
    industrial: 'Industrial Training Simulations & Enterprise LOTO'
  };

  // Reordering & filtering pipeline
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      // Search matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesTech = p.technologies?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }

      // Platform filter
      if (selectedPlatform !== 'All') {
        const hasPlatform = p.platforms?.some((plat) =>
          plat.toLowerCase().includes(selectedPlatform.toLowerCase())
        );
        if (!hasPlatform) return false;
      }

      // Tech filter
      if (selectedTech !== 'All') {
        const hasTech = p.techList?.some((t) =>
          t.toLowerCase().includes(selectedTech.toLowerCase())
        ) || p.technologies?.toLowerCase().includes(selectedTech.toLowerCase());
        if (!hasTech) return false;
      }

      // Type filter
      if (selectedType !== 'All') {
        if (p.type !== selectedType) return false;
      }

      // Audience focus filter
      if (activeAudience === 'games') {
        if (p.type !== 'Game') return false;
      } else if (activeAudience === 'industrial') {
        if (p.type !== 'Training Simulation') return false;
      } else if (activeAudience === 'xr') {
        const isXR = p.platforms?.some((pl) => pl === 'VR' || pl === 'Meta Quest' || pl === 'ARCore') || p.type?.includes('AR');
        if (!isXR) return false;
      }

      return true;
    }).sort((a, b) => {
      // Featured projects first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [searchQuery, selectedPlatform, selectedTech, selectedType, activeAudience]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedPlatform('All');
    setSelectedTech('All');
    setSelectedType('All');
    if (activeAudience !== 'all') {
      onSelectAudience('all');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header-block reveal-on-scroll">
        <span className="section-label">PROJECT PORTFOLIO</span>
        <h2 className="projects-title">FEATURED QUESTS &amp; BUILDS</h2>
        <div className="projects-title-line"></div>
      </div>

      {/* ACTIVE AUDIENCE FOCUS BANNER */}
      {activeAudience !== 'all' && (
        <div className="active-audience-banner reveal-on-scroll">
          <span className="banner-prefix">Focus:</span>
          <strong>{focusLabels[activeAudience]}</strong>
          <button
            type="button"
            className="banner-reset-btn"
            onClick={() => onSelectAudience('all')}
            aria-label="Show all projects"
          >
            ✕ Show All Projects
          </button>
        </div>
      )}

      {/* FILTER & SEARCH TOOLBAR */}
      <div className="projects-toolbar reveal-on-scroll reveal-delay-1">
        {/* Search input */}
        <div className="projects-search-wrapper">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            className="projects-search-input"
            placeholder="Search by title, tech (Photon, Quest, Shader...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects by keyword"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter controls row */}
        <div className="projects-filter-row">
          {/* Platform chips */}
          <div className="filter-group">
            <span className="filter-group-label">Platform:</span>
            <div className="filter-chips">
              {PLATFORMS.map((plat) => (
                <button
                  key={plat}
                  type="button"
                  className={`filter-chip ${selectedPlatform === plat ? 'active' : ''}`}
                  onClick={() => setSelectedPlatform(plat)}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>

          {/* Type chips */}
          <div className="filter-group">
            <span className="filter-group-label">Type:</span>
            <div className="filter-chips">
              {TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`filter-chip ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Tech chips */}
          <div className="filter-group">
            <span className="filter-group-label">Tech:</span>
            <div className="filter-chips">
              {TECHS.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  className={`filter-chip ${selectedTech === tech ? 'active' : ''}`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results counter and reset */}
        <div className="projects-meta-bar">
          <span className="projects-counter">
            Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
          {(searchQuery || selectedPlatform !== 'All' || selectedTech !== 'All' || selectedType !== 'All' || activeAudience !== 'all') && (
            <button
              type="button"
              className="projects-clear-filters-btn"
              onClick={handleResetFilters}
            >
              Reset All Filters ↺
            </button>
          )}
        </div>
      </div>

      {/* INTERACTIVE PROJECTS GRID */}
      {filteredProjects.length > 0 ? (
        <div className="projects-interactive-grid reveal-on-scroll reveal-delay-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>
      ) : (
        <div className="projects-empty-state">
          <p>No projects match your filter criteria.</p>
          <button
            type="button"
            className="nav-game-button"
            onClick={handleResetFilters}
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* QUICK CATEGORY HUB LINKS */}
      <div className="projects-category-hub reveal-on-scroll reveal-delay-3">
        <h3 className="hub-heading">Explore Curated Project Archives</h3>
        <div className="hub-links-grid">
          <a
            href={route('/professional')}
            className="hub-card"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/professional');
            }}
          >
            <div className="hub-card-title">Professional Projects Archive ➜</div>
            <p className="hub-card-desc">Industrial LOTO &amp; manufacturing VR training simulations under enterprise NDA</p>
          </a>

          <a
            href={route('/personal')}
            className="hub-card"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/personal');
            }}
          >
            <div className="hub-card-title">Sidequests &amp; Indie Games ➜</div>
            <p className="hub-card-desc">Playable prototypes, mobile AR mini-games, and game mechanics R&amp;D</p>
          </a>
        </div>
      </div>

      {/* CASE STUDY DRAWER MODAL */}
      {selectedProject && (
        <CaseStudyDrawer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
