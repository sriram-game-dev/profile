import { useEffect, useState } from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ProfessionalProjects from './components/ProfessionalProjects';
import PersonalProjects from './components/PersonalProjects';
import ProjectDetails from './components/ProjectDetails';
import { projects, personalProjects } from './data/projectsData';
import { normalizePath } from './utils/asset';


function App() {

  const [path, setPath] = useState(
    normalizePath(window.location.pathname)
  );


  // ========================================
  // HANDLE NAVIGATION & HASH SCROLL
  // ========================================

  useEffect(() => {

    const handleNavigation = () => {
      setPath(normalizePath(window.location.pathname));

      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    window.addEventListener(
      'popstate',
      handleNavigation
    );

    // Initial check for hash on page load
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }

    return () => {
      window.removeEventListener(
        'popstate',
        handleNavigation
      );
    };

  }, []);


  // ========================================
  // PROFESSIONAL PROJECTS
  // ========================================

  if (path === '/professional') {
    return (
      <>
        <NavBar />
        <ProfessionalProjects />
        <Footer />
      </>
    );
  }


  // ========================================
  // PERSONAL PROJECTS
  // ========================================

  if (path === '/personal') {
    return (
      <>
        <NavBar />
        <PersonalProjects />
        <Footer />
      </>
    );
  }


  // ========================================
  // PROJECT DETAILS
  // PROFESSIONAL + PERSONAL
  // ========================================

  const project =
    projects.find(
      (project) => project.link === path
    ) ||
    personalProjects.find(
      (project) => project.link === path
    );


  if (project) {
    return (
      <>
        <ProjectDetails
          project={project}
        />
        <Footer />
      </>
    );
  }


  // ========================================
  // MAIN PORTFOLIO
  // ========================================

  return (
    <>
      <NavBar />

      <main>

        <Home />

        <About />

        <Experience />

        <Projects />

        <Skills />

        <Resume />

        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;