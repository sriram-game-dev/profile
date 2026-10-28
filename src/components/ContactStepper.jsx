import { useState } from 'react';

const INTENT_OPTIONS = [
  {
    id: 'fulltime',
    icon: '🎯',
    label: 'Full-Time / Studio Role',
    desc: 'Hiring a Game Developer or XR / Simulation Engineer'
  },
  {
    id: 'xr-contract',
    icon: '🥽',
    label: 'XR / VR Simulation Contract',
    desc: 'Industrial training, Meta Quest, digital twin, or safety sim'
  },
  {
    id: 'game-collab',
    icon: '🕹️',
    label: 'Game Project / Indie',
    desc: 'Unity/C#, WebGL arcade, gameplay mechanics, or prototyping'
  },
  {
    id: 'general',
    icon: '💬',
    label: 'General Inquiry / Hello',
    desc: 'Technical consultation, networking, or speaking'
  }
];

const TEMPLATES = {
  'fulltime': 'Hi Sriram,\n\nWe came across your portfolio and would love to discuss an open Game / XR Developer opportunity at our team.\n\nKey details:\n- Role:\n- Location / Remote:\n- Tech Stack:',
  'xr-contract': 'Hi Sriram,\n\nWe have an XR / industrial simulation project and would like to explore working together.\n\nProject Scope:\n- Platform (Meta Quest, PC VR, etc.):\n- Timeline:\n- Key requirements:',
  'game-collab': 'Hi Sriram,\n\nI saw your Unity projects and want to discuss collaborating on a game project.\n\nProject Overview:\n- Genre / Platform:\n- Current stage:',
  'general': 'Hi Sriram,\n\nWanted to reach out after checking out your work in Unity and XR.'
};

export default function ContactStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    intent: 'xr-contract',
    name: '',
    email: '',
    organization: '',
    message: TEMPLATES['xr-contract']
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const selectedIntentObj = INTENT_OPTIONS.find(o => o.id === formData.intent) || INTENT_OPTIONS[1];

  const handleIntentChange = (intentId) => {
    setFormData(prev => ({
      ...prev,
      intent: intentId,
      // Auto-update message if previous message was empty or was the default template
      message: (!prev.message || Object.values(TEMPLATES).includes(prev.message))
        ? (TEMPLATES[intentId] || '')
        : prev.message
    }));
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name or studio callsign (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs = {};
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message or mission brief (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
      }
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const constructPayload = () => {
    return `Mission Intent: ${selectedIntentObj.label}\nFrom: ${formData.name} (${formData.email})${formData.organization ? `\nOrganization: ${formData.organization}` : ''}\n\nMessage:\n${formData.message}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    const subject = encodeURIComponent(`[Portfolio Contact] ${selectedIntentObj.label} - ${formData.name}`);
    const body = encodeURIComponent(constructPayload());
    const mailtoUrl = `mailto:sriramsridhar29@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const handleCopyPayload = async () => {
    try {
      await navigator.clipboard.writeText(constructPayload());
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 3000);
    } catch {
      // Fallback
      setCopiedPayload(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      intent: 'xr-contract',
      name: '',
      email: '',
      organization: '',
      message: TEMPLATES['xr-contract']
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="contact-stepper-card success-card" role="status" aria-live="polite">
        <div className="success-radar">
          <div className="radar-ping"></div>
          <span className="success-icon" aria-hidden="true">✓</span>
        </div>

        <h3 className="success-title">TRANSMISSION DISPATCHED</h3>
        <p className="success-sub">
          Your mail client has been opened with your mission brief pre-filled for <strong>sriramsridhar29@gmail.com</strong>.
        </p>

        <div className="summary-box">
          <div className="summary-row">
            <span className="summary-label">Mission Intent:</span>
            <span className="summary-val">{selectedIntentObj.icon} {selectedIntentObj.label}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Sender:</span>
            <span className="summary-val">{formData.name} &lt;{formData.email}&gt;</span>
          </div>
          {formData.organization && (
            <div className="summary-row">
              <span className="summary-label">Studio / Org:</span>
              <span className="summary-val">{formData.organization}</span>
            </div>
          )}
        </div>

        <div className="success-actions">
          <button
            type="button"
            className="stepper-btn secondary-btn"
            onClick={handleCopyPayload}
          >
            {copiedPayload ? '✓ Payload Copied to Clipboard' : '📋 Copy Full Message Payload'}
          </button>
          <button
            type="button"
            className="stepper-btn primary-btn"
            onClick={handleReset}
          >
            ↺ Send Another Signal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-stepper-card">
      {/* STEPPER HUD HEADER */}
      <div className="stepper-header" role="tablist" aria-label="Contact Steps">
        <div className={`stepper-node ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}`}>
          <div className="node-circle">{currentStep > 1 ? '✓' : '1'}</div>
          <span className="node-label">01. Intent</span>
        </div>
        <div className={`stepper-line ${currentStep > 1 ? 'filled' : ''}`}></div>
        <div className={`stepper-node ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`}>
          <div className="node-circle">{currentStep > 2 ? '✓' : '2'}</div>
          <span className="node-label">02. Coordinates</span>
        </div>
        <div className={`stepper-line ${currentStep > 2 ? 'filled' : ''}`}></div>
        <div className={`stepper-node ${currentStep === 3 ? 'active' : ''}`}>
          <div className="node-circle">3</div>
          <span className="node-label">03. Mission</span>
        </div>
      </div>

      <form onSubmit={currentStep === 3 ? handleSubmit : handleNext} noValidate>
        {/* STEP 1: INTENT */}
        {currentStep === 1 && (
          <div className="step-pane step-1" role="region" aria-label="Step 1: Select Intent">
            <div className="step-intro">
              <span className="step-badge">STEP 01 OF 03</span>
              <h3 className="step-title">Select Mission Objective</h3>
              <p className="step-desc">What kind of project or role are we launching?</p>
            </div>

            <div className="intent-grid" role="radiogroup" aria-label="Mission objectives">
              {INTENT_OPTIONS.map((opt) => {
                const isSelected = formData.intent === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`intent-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleIntentChange(opt.id)}
                  >
                    <div className="intent-icon">{opt.icon}</div>
                    <div className="intent-text">
                      <div className="intent-name">{opt.label}</div>
                      <div className="intent-desc">{opt.desc}</div>
                    </div>
                    <div className="intent-indicator">
                      <div className="indicator-pip"></div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="stepper-nav-row justify-end">
              <button
                type="button"
                className="stepper-btn primary-btn"
                onClick={() => setCurrentStep(2)}
              >
                Next: Enter Coordinates ➔
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DETAILS */}
        {currentStep === 2 && (
          <div className="step-pane step-2" role="region" aria-label="Step 2: Enter Coordinates">
            <div className="step-intro">
              <span className="step-badge">STEP 02 OF 03</span>
              <h3 className="step-title">Enter Coordinates</h3>
              <p className="step-desc">Who is transmitting this mission request?</p>
            </div>

            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="stepper-name" className="field-label">
                  Your Name / Callsign <span className="req">*</span>
                </label>
                <input
                  id="stepper-name"
                  type="text"
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, name: e.target.value }));
                    if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                  }}
                  className={`stepper-input ${errors.name ? 'input-error' : ''}`}
                  autoFocus
                />
                {errors.name && <span className="error-text" role="alert">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="stepper-email" className="field-label">
                  Your Email <span className="req">*</span>
                </label>
                <input
                  id="stepper-email"
                  type="email"
                  placeholder="e.g. alex@gamestudio.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                  }}
                  className={`stepper-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <span className="error-text" role="alert">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="stepper-org" className="field-label">
                  Company / Studio / Project Name <span className="opt">(Optional)</span>
                </label>
                <input
                  id="stepper-org"
                  type="text"
                  placeholder="e.g. Meta / Hyperion Interactive"
                  value={formData.organization}
                  onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                  className="stepper-input"
                />
              </div>
            </div>

            <div className="stepper-nav-row">
              <button
                type="button"
                className="stepper-btn secondary-btn"
                onClick={handleBack}
              >
                ◀ Back
              </button>
              <button
                type="button"
                className="stepper-btn primary-btn"
                onClick={(e) => handleNext(e)}
              >
                Next: Compose Brief ➔
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: MESSAGE */}
        {currentStep === 3 && (
          <div className="step-pane step-3" role="region" aria-label="Step 3: Compose Mission Brief">
            <div className="step-intro">
              <span className="step-badge">STEP 03 OF 03</span>
              <h3 className="step-title">Transmit Mission Brief</h3>
              <p className="step-desc">
                Payload for: <strong>{selectedIntentObj.label}</strong>
              </p>
            </div>

            <div className="form-group">
              <div className="textarea-header">
                <label htmlFor="stepper-msg" className="field-label">
                  Mission Details / Timeline / Tech Needs <span className="req">*</span>
                </label>
                <span className="char-count">{formData.message.length} chars</span>
              </div>
              <textarea
                id="stepper-msg"
                rows="6"
                value={formData.message}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, message: e.target.value }));
                  if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                }}
                className={`stepper-textarea ${errors.message ? 'input-error' : ''}`}
                placeholder="Describe your vision, timeline, engine requirements, or questions..."
                autoFocus
              ></textarea>
              {errors.message && <span className="error-text" role="alert">{errors.message}</span>}
            </div>

            <div className="stepper-nav-row">
              <button
                type="button"
                className="stepper-btn secondary-btn"
                onClick={handleBack}
              >
                ◀ Back
              </button>
              <button
                type="submit"
                className="stepper-btn submit-btn"
              >
                Transmit Signal 🚀
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
