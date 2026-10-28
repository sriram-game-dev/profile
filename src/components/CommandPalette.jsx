import { useState, useEffect, useRef } from 'react';
import { BASE_PATH, navigateTo } from '../utils/asset';
import { allProjects } from '../data/projectsData';

function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Focus input and lock scroll on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => inputRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, []);

  // Master action list
  const actions = [
    // Sections
    { id: 'sec-home', type: 'Section', title: 'Home', icon: '🏠', action: () => scrollToSection('home') },
    { id: 'sec-about', type: 'Section', title: 'About Sriram', icon: '👤', action: () => scrollToSection('about') },
    { id: 'sec-exp', type: 'Section', title: 'Experience & Backstory', icon: '🚀', action: () => scrollToSection('experience') },
    { id: 'sec-projects', type: 'Section', title: 'Projects Grid', icon: '🎮', action: () => scrollToSection('projects') },
    { id: 'sec-demo', type: 'Section', title: 'Playable WebGL Demo', icon: '🕹️', action: () => scrollToSection('demo') },
    { id: 'sec-skills', type: 'Section', title: 'Skills & Toolkit', icon: '⚡', action: () => scrollToSection('skills') },
    { id: 'sec-resume', type: 'Section', title: 'Resume & Credentials', icon: '📄', action: () => scrollToSection('resume') },
    { id: 'sec-contact', type: 'Section', title: 'Get In Touch', icon: '✉️', action: () => scrollToSection('contact') },

    // Quick Actions
    {
      id: 'act-email',
      type: 'Quick Action',
      title: 'Copy Email Address (sriramsridhar29@gmail.com)',
      icon: '📋',
      action: async () => {
        try {
          await navigator.clipboard.writeText('sriramsridhar29@gmail.com');
          showToast('✓ Email copied to clipboard!');
        } catch {
          showToast('sriramsridhar29@gmail.com');
        }
      }
    },
    {
      id: 'act-resume',
      type: 'Quick Action',
      title: 'Open Resume PDF',
      icon: '📄',
      action: () => {
        window.open(`${BASE_PATH}/resume.pdf`, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'act-github',
      type: 'Quick Action',
      title: 'Open GitHub Profile',
      icon: '🐙',
      action: () => {
        window.open('https://github.com/sriram-game-dev', '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'act-itch',
      type: 'Quick Action',
      title: 'Open itch.io Games Page',
      icon: '🎮',
      action: () => {
        window.open('https://sriram-game-dev.itch.io', '_blank', 'noopener,noreferrer');
        onClose();
      }
    },

    // Projects
    ...allProjects.map((p) => ({
      id: `proj-${p.id || p.title}`,
      type: 'Project',
      title: `${p.title} (${p.type || 'Project'})`,
      icon: '🕹️',
      action: () => {
        onClose();
        navigateTo(p.link);
      }
    }))
  ];

  const scrollToSection = (id) => {
    onClose();
    if (window.location.pathname !== `${BASE_PATH}/` && window.location.pathname !== '/') {
      navigateTo(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
      onClose();
    }, 1200);
  };

  // Filter actions based on query
  const filtered = actions.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );
  });

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const activeEl = listRef.current?.children[selectedIndex];
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="cmd-palette-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="cmd-palette-modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* INPUT HEADER */}
        <div className="cmd-input-row">
          <span className="cmd-search-icon" aria-hidden="true">⌘</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-palette-input"
            placeholder="Type a command, project, or section... (Esc to close)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            aria-label="Search portfolio commands"
          />
          <kbd className="cmd-esc-kbd">ESC</kbd>
        </div>

        {/* TOAST MESSAGE */}
        {toastMessage && (
          <div className="cmd-toast-banner" role="status">
            {toastMessage}
          </div>
        )}

        {/* RESULTS LIST */}
        <div ref={listRef} className="cmd-results-list" role="listbox">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                role="option"
                aria-selected={idx === selectedIndex}
                className={`cmd-result-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={item.action}
                onPointerEnter={() => setSelectedIndex(idx)}
              >
                <span className="cmd-item-icon" aria-hidden="true">{item.icon}</span>
                <span className="cmd-item-title">{item.title}</span>
                <span className="cmd-item-type">{item.type}</span>
              </div>
            ))
          ) : (
            <div className="cmd-empty">
              No matching commands or projects found.
            </div>
          )}
        </div>

        {/* PALETTE FOOTER */}
        <div className="cmd-palette-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Select</span>
          <span><kbd>Esc</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
