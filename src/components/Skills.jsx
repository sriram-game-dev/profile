function SkillChip({ skill, label, activeSkill, onSelectSkill }) {
  const target = skill || label;
  const isActive = activeSkill?.toLowerCase() === target.toLowerCase();

  return (
    <button
      type="button"
      className={`interactive-skill-chip ${isActive ? 'active' : ''}`}
      onClick={() => onSelectSkill(target)}
      aria-label={`Highlight projects built with ${label || skill}`}
      title={`Click to filter projects built with ${label || skill}`}
    >
      <span>{label || skill}</span>
      <span className="skill-chip-arrow" aria-hidden="true">➜</span>
    </button>
  );
}

function Skills({ activeSkill = '', onSelectSkill = () => {} }) {
  return (
    <section id="skills" className="skills">

      <span className="section-label">SYSTEM ARCHITECTURE</span>

      <div className="skills-header reveal-on-scroll">
        <h2>MY TOOLKIT</h2>
        <div className="experience-header-line"></div>
        <p className="skills-guide-hint">
          💡 Click any skill chip below to highlight projects built with that technology
        </p>
      </div>

      <div className="skills-grid reveal-on-scroll reveal-delay-1">

        <div className="skill-group">
          <span className="skill-label">ENGINE</span>
          <h3>Unity</h3>
          <p>Unity 3D, URP, HDRP</p>

          <div className="skill-chips-container">
            <SkillChip skill="Unity" label="Unity 3D" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="URP" label="URP" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="Shader Graph" label="Shader Graph" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">LANGUAGES</span>
          <h3>Unity C#</h3>
          <p>Gameplay Systems, Game Logic, UI, Interaction</p>

          <div className="skill-chips-container">
            <SkillChip skill="C#" label="C#" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="Object Pooling" label="Object Pooling" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="State Machines" label="State Machines" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">XR ECOSYSTEM</span>
          <h3>VR / AR / MR</h3>
          <p>Unity XR Interaction Toolkit, Meta XR SDK, Passthrough</p>

          <div className="skill-chips-container">
            <SkillChip skill="Meta SDK" label="Meta XR SDK" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="VR" label="XR Interaction Toolkit" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="AR Foundation" label="AR Foundation" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">TARGET PLATFORMS</span>
          <h3>PC · Android · WebGL · Meta Quest</h3>
          <p>Cross-platform deployment &amp; standalone VR optimization</p>

          <div className="skill-chips-container">
            <SkillChip skill="Meta Quest" label="Meta Quest" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="Android" label="Android" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="WebGL" label="WebGL" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="PC" label="PC Standalone" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">DEVELOPMENT</span>
          <h3>Game Development</h3>
          <p>
            Gameplay Programming, UI, Animation, Timeline,
            <br />VFX/EFX, Lighting, Optimization
          </p>

          <div className="skill-chips-container">
            <SkillChip skill="Gameplay Programming" label="Gameplay Programming" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="Optimization" label="Performance Optimization" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">TOOLS</span>
          <h3>Development Tools</h3>
          <p>
            Visual Studio, VS Code, Blender (Basic),
            <br />Microsoft Office, Google Docs
          </p>

          <div className="skill-chips-container">
            <SkillChip skill="Unity" label="Visual Studio" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
            <SkillChip skill="Unity" label="VS Code" activeSkill={activeSkill} onSelectSkill={onSelectSkill} />
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;
