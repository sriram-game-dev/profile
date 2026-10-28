import { useState, useRef, useEffect } from 'react';

function ProjectCard({ project, onOpenCaseStudy }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  // Play video on scroll-into-view (or tap on mobile)
  useEffect(() => {
    const el = cardRef.current;
    if (!el || !project.video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
          videoRef.current?.play().catch(() => {});
        } else {
          setIsPlaying(false);
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [project.video]);

  const handlePointerEnter = () => {
    if (project.video && videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch(() => {});
    }
  };

  const handlePointerLeave = () => {
    if (project.video && videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
    }
  };

  const handleImgError = (e) => {
    if (!e.currentTarget.dataset.errored && project.image?.endsWith('.jpg')) {
      e.currentTarget.dataset.errored = 'true';
      e.currentTarget.src = project.image.replace('.jpg', '.svg');
    }
  };

  return (
    <article
      ref={cardRef}
      className={`project-interactive-card ${project.featured ? 'is-featured' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`Open case study for ${project.title}`}
      onClick={() => onOpenCaseStudy(project)}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenCaseStudy(project);
        }
      }}
    >
      <div className="card-media-wrapper">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="card-media-img"
          onError={handleImgError}
        />

        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className={`card-media-video ${isPlaying ? 'visible' : ''}`}
          />
        )}

        <div className="card-media-overlay">
          {project.featured && (
            <span className="card-featured-badge">★ FEATURED</span>
          )}
          {project.type && (
            <span className="card-type-badge">{project.type}</span>
          )}
        </div>

        <div className="card-quick-inspect">
          <span>Inspect Case Study ➜</span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-platforms-row">
          {project.platforms?.map((plat) => (
            <span key={plat} className="card-platform-pill">{plat}</span>
          ))}
        </div>

        <h3 className="card-title">{project.title}</h3>

        <p className="card-desc">{project.description}</p>

        <div className="card-tech-chips">
          {project.techList?.slice(0, 3).map((tech) => (
            <span key={tech} className="card-tech-chip">{tech}</span>
          ))}
          {project.techList && project.techList.length > 3 && (
            <span className="card-tech-chip more">+{project.techList.length - 3}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
