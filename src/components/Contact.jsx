import { useState } from 'react';

function Contact() {
  const [copyStatus, setCopyStatus] = useState('idle'); // 'idle' | 'copied' | 'error'

  const email = 'sriramsridhar29@gmail.com';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        setCopyStatus('copied');
      } else {
        // Fallback for older browsers or insecure contexts
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (successful) {
          setCopyStatus('copied');
        } else {
          throw new Error('execCommand copy failed');
        }
      }
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="contact">

      <span className="section-label">GET IN TOUCH</span>

      <h2>Ready to press start</h2>

      <p>
        Whether you have an XR simulation project to build, a game developer role to fill,
        or want to discuss immersive technology — my inbox is always open.
      </p>

      {/* Direct Contact Card */}
      <div
        style={{
          marginTop: '32px',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '12px',
            padding: '12px 24px',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15)'
          }}
        >
          <a
            href={`mailto:${email}`}
            style={{
              color: '#f8fafc',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#f59e0b'}
            onMouseOut={(e) => e.target.style.color = '#f8fafc'}
          >
            {email}
          </a>

          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy email address"
            style={{
              background: copyStatus === 'error' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.15)',
              border: copyStatus === 'error' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '6px',
              color: copyStatus === 'error' ? '#ef4444' : '#f59e0b',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: '600',
              padding: '6px 12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = copyStatus === 'error' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.25)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = copyStatus === 'error' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {copyStatus === 'copied' ? 'Copied! ✓' : copyStatus === 'error' ? 'Failed to copy' : 'Copy'}
          </button>

        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            color: '#94a3b8',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            marginTop: '4px'
          }}
        >
          <span>📱 +91 8072938627</span>
          <span>📍 Tamil Nadu, India</span>
        </div>
      </div>

      <div className="contact-links">

        {/* Email Icon */}
        <a
          href={`mailto:${email}`}
          aria-label="Email Sriram"
          title="Send Email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5h18v14H3V5zm2 2v.5l7 5 7-5V7l-7 5-7-5z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sriramsridhar29/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.5 8.5H3V21h3.5V8.5zM4.75 3C3.65 3 3 3.75 3 4.75S3.65 6.5 4.75 6.5s1.75-.75 1.75-1.75S5.85 3 4.75 3zM21 13.8c0-3.35-1.8-5.3-4.55-5.3-2.1 0-3.05 1.15-3.55 1.95V8.5H9.4V21h3.5v-6.2c0-1.65.3-3.25 2.35-3.25 2.05 0 2.05 1.9 2.05 3.35V21H21v-7.2z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sriram-game-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.23-3.37-1.23-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 8.1c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2z" />
          </svg>
        </a>

      </div>

    </section>
  );
}

export default Contact;