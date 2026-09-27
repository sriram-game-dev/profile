import { useEffect, useState } from 'react';

function NavBar() {
  const [showGoTop, setShowGoTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const path = window.location.pathname;
  const isHomePage = path === '/';

  /* Scroll handling */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;

      setShowGoTop(nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* Close mobile menu on desktop resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* Navigation handling */
  const handleSectionClick = (event, section) => {
    event.preventDefault();
    setMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        window.history.pushState(null, '', `/#${section}`);
      }
      return;
    }

    window.history.pushState(null, '', `/#${section}`);
    window.dispatchEvent(new PopStateEvent('popstate'));

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  /* Logo click */
  const handleLogoClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', '/');
      return;
    }

    window.history.pushState(null, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* LOGO (GERLOGU STYLE: bold first name, clean studio branding) */}
        <div className="logo-container">
          <a
            href="/"
            className="logo gerlogu-brand"
            onClick={handleLogoClick}
          >
            <span className="brand-name">
              <strong>sriram</strong>sridhar
            </span>
          </a>
          <div className="studio-status-pill" title="Indie Game Dev - Ready for Opportunities">
            <span className="status-dot"></span>
            <span>DEV.READY</span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS (CENTERED, CLEAN TYPOGRAPHY WITH GROW UNDERLINE) */}
        <nav className="nav-links desktop-nav">
          <a
            href="/#home"
            className="nav-item"
            onClick={(event) => handleSectionClick(event, 'home')}
          >
            <span>Home</span>
          </a>

          <a
            href="/#about"
            className="nav-item"
            onClick={(event) => handleSectionClick(event, 'about')}
          >
            <span>About</span>
          </a>

          <a
            href="/#experience"
            className="nav-item"
            onClick={(event) => handleSectionClick(event, 'experience')}
          >
            <span>Experience</span>
          </a>

          <a
            href="/#skills"
            className="nav-item"
            onClick={(event) => handleSectionClick(event, 'skills')}
          >
            <span>Skills</span>
          </a>

          <a
            href="/#resume"
            className="nav-item"
            onClick={(event) => handleSectionClick(event, 'resume')}
          >
            <span>Resume</span>
          </a>

          <a
            href="/#contact"
            className="nav-item"
            onClick={(event) => handleSectionClick(event, 'contact')}
          >
            <span>Contact</span>
          </a>

          <a
            href="https://github.com/sriram-game-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item nav-item--external"
          >
            <span>GitHub</span>
            <svg className="external-arrow" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </nav>

        {/* RIGHT SIDE: TACTICAL GAME DEVELOPER CTA BUTTON & MOBILE TOGGLE */}
        <div className="navbar-right">
          <a
            href="/#projects"
            onClick={(event) => handleSectionClick(event, 'projects')}
            className="nav-cta-link"
          >
            <button className="nav-game-button" type="button" aria-label="Explore Portfolio">
              <span className="btn-shape">
                <span className="btn-skew-slide"></span>
                <span className="btn-text">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ marginRight: '6px' }}>
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
                  </svg>
                  PORTFOLIO
                </span>
              </span>
            </button>
          </a>

          {/* HAMBURGER TOGGLE FOR MOBILE/TABLET */}
          <button
            className={`mobile-menu-toggle ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            type="button"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'drawer-open' : ''}`}>
        <nav className="mobile-nav-links">
          <a
            href="/#home"
            className="mobile-nav-item"
            onClick={(event) => handleSectionClick(event, 'home')}
          >
            <span>Home</span>
          </a>
          <a
            href="/#about"
            className="mobile-nav-item"
            onClick={(event) => handleSectionClick(event, 'about')}
          >
            <span>About</span>
          </a>
          <a
            href="/#experience"
            className="mobile-nav-item"
            onClick={(event) => handleSectionClick(event, 'experience')}
          >
            <span>Experience</span>
          </a>
          <a
            href="/#projects"
            className="mobile-nav-item"
            onClick={(event) => handleSectionClick(event, 'projects')}
          >
            <span>Projects</span>
          </a>
          <a
            href="/#skills"
            className="mobile-nav-item"
            onClick={(event) => handleSectionClick(event, 'skills')}
          >
            <span>Skills</span>
          </a>
          <a
            href="/#resume"
            className="mobile-nav-item"
            onClick={(event) => handleSectionClick(event, 'resume')}
          >
            <span>Resume</span>
          </a>
          <a
            href="/#contact"
            className="mobile-nav-item"
            onClick={(event) => handleSectionClick(event, 'contact')}
          >
            <span>Contact</span>
          </a>
          <a
            href="https://github.com/sriram-game-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-item mobile-nav-item--external"
          >
            <span>GitHub</span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          <div className="mobile-cta-wrapper">
            <button
              className="nav-game-button mobile-cta-btn"
              type="button"
              onClick={(event) => handleSectionClick(event, 'projects')}
            >
              <span className="btn-shape">
                <span className="btn-skew-slide"></span>
                <span className="btn-text">EXPLORE PORTFOLIO</span>
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* GO TO TOP */}
      {showGoTop && (
        <button
          className="go-top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          aria-label="Scroll to top"
        >
          ↑ <span>GO TO TOP</span>
        </button>
      )}

    </header>
  );
}

export default NavBar;