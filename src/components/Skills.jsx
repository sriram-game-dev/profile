function Skills() {
  return (
    <section id="skills" className="skills">

      <span className="section-label">SYSTEM ARCHITECTURE</span>

      <div className="skills-header">
        <h2>MY TOOLKIT</h2>
        <div className="experience-header-line"></div>
      </div>

      <div className="skills-grid">

        <div className="skill-group">
          <span className="skill-label">ENGINE</span>

          <h3>Unity</h3>

          <p>
            Unity 3D, URP, HDRP
          </p>

          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <code>Unity 3D</code>
            <code>URP</code>
            <code>HDRP</code>
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">LANGUAGES</span>

          <h3>Unity C#</h3>

          <p>
            Gameplay Systems, Game Logic, UI, Interaction
          </p>

          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <code>C#</code>
            <code>OOP Architecture</code>
            <code>State Machines</code>
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">XR ECOSYSTEM</span>

          <h3>VR / AR / MR</h3>

          <p>
            Unity XR Interaction Toolkit, Meta XR SDK, Passthrough
          </p>

          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <code>Meta XR SDK</code>
            <code>XR Interaction Toolkit</code>
            <code>Passthrough</code>
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">TARGET PLATFORMS</span>

          <h3>PC · Android · WebGL · Meta Quest</h3>

          <p>
            Cross-platform deployment &amp; standalone VR optimization
          </p>

          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <code>Meta Quest 2/3/Pro</code>
            <code>PC Standalone</code>
            <code>Android</code>
            <code>WebGL</code>
          </div>
        </div>


        <div className="skill-group">
          <span className="skill-label">DEVELOPMENT</span>

          <h3>Game Development</h3>

          <p>
            Gameplay Programming, UI, Animation, Timeline, 
            <br />VFX/EFX, Lighting, Optimization
          </p>
        </div>


        <div className="skill-group">
          <span className="skill-label">TOOLS</span>

          <h3>Development Tools</h3>

      <p>
       Visual Studio, VS Code, Blender (Basic),
        <br />
  Microsoft Office, Google Docs
        </p>
        </div>

      </div>

    </section>
  );
}

export default Skills;