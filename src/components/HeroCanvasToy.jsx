import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight interactive 2D physics & particle game toy for the Hero section.
 * Renders low-poly floating game nodes with velocity, damping, cursor attraction,
 * and impulse ripples on click/touch.
 */
function HeroCanvasToy() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isVisibleRef = useRef(true);
  const [hintDismissed, setHintDismissed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle high-DPI
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Pause physics simulation when hero is not in viewport
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    // Pointer state
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      radius: 120
    };

    // Low-poly floating geometric bodies
    const types = ['cube', 'triangle', 'diamond', 'ring'];
    const colors = [
      { fill: 'rgba(245, 158, 11, 0.15)', stroke: 'rgba(245, 158, 11, 0.7)', glow: 'rgba(245, 158, 11, 0.3)' },
      { fill: 'rgba(139, 92, 246, 0.15)', stroke: 'rgba(139, 92, 246, 0.7)', glow: 'rgba(139, 92, 246, 0.3)' },
      { fill: 'rgba(56, 189, 248, 0.15)', stroke: 'rgba(56, 189, 248, 0.7)', glow: 'rgba(56, 189, 248, 0.3)' },
      { fill: 'rgba(52, 211, 153, 0.15)', stroke: 'rgba(52, 211, 153, 0.7)', glow: 'rgba(52, 211, 153, 0.3)' }
    ];

    const count = window.innerWidth < 640 ? 12 : 22;
    const nodes = [];

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * (width || 800),
        y: Math.random() * (height || 500),
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: 14 + Math.random() * 18,
        angle: Math.random() * Math.PI * 2,
        va: (Math.random() - 0.5) * 0.02,
        type: types[i % types.length],
        color: colors[i % colors.length]
      });
    }

    // Shockwave ripples & spark particles on click
    const ripples = [];
    const sparks = [];

    const triggerImpulse = (x, y) => {
      ripples.push({
        x,
        y,
        radius: 10,
        maxRadius: 160,
        opacity: 0.9,
        color: 'rgba(245, 158, 11, '
      });

      // Spawn spark particles
      for (let i = 0; i < 10; i++) {
        const speed = 2 + Math.random() * 4;
        const angle = Math.random() * Math.PI * 2;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.02 + Math.random() * 0.03,
          color: Math.random() > 0.5 ? '#f59e0b' : '#c084fc'
        });
      }

      // Physics force outward on nodes
      nodes.forEach((node) => {
        const dx = node.x - x;
        const dy = node.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 220) {
          const force = (1 - dist / 220) * 12;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
          node.va += (Math.random() - 0.5) * 0.1;
        }
      });
    };

    // Pointer events
    const updatePointerPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      pointer.targetX = clientX - rect.left;
      pointer.targetY = clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerDown = (e) => {
      updatePointerPos(e);
      triggerImpulse(pointer.targetX, pointer.targetY);
      setHintDismissed(true);
    };

    const handlePointerMove = (e) => {
      updatePointerPos(e);
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    // Animation Loop
    const draw = () => {
      if (!isVisibleRef.current) {
        animId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.15;
      pointer.y += (pointer.targetY - pointer.y) * 0.15;

      // Draw subtle interactive crosshair ring at cursor if active
      if (pointer.active && pointer.x > 0 && pointer.y > 0) {
        ctx.save();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 22, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 44, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Draw and update shockwave ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 5;
        r.opacity *= 0.94;

        if (r.opacity <= 0.02 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.strokeStyle = `${r.color}${r.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Draw and update spark particles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, s.life);
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!prefersReducedMotion) {
          // Physics damping
          n.vx *= 0.985;
          n.vy *= 0.985;
          n.va *= 0.98;

          // Gentle ambient drift
          n.vx += (Math.random() - 0.5) * 0.02;
          n.vy += (Math.random() - 0.5) * 0.02;

          // Pointer gravity/repulsion
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < pointer.radius) {
              const force = (1 - dist / pointer.radius) * 0.6;
              // Repel slightly to keep cursor clear
              n.vx -= (dx / dist) * force;
              n.vy -= (dy / dist) * force;
            }
          }

          n.x += n.vx;
          n.y += n.vy;
          n.angle += n.va;

          // Boundary bounce / wrap
          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;
        }

        // Draw node
        ctx.save();
        ctx.translate(n.x, n.y);
        ctx.rotate(n.angle);
        ctx.fillStyle = n.color.fill;
        ctx.strokeStyle = n.color.stroke;
        ctx.lineWidth = 1.2;

        const s = n.size;
        ctx.beginPath();
        if (n.type === 'cube') {
          ctx.rect(-s / 2, -s / 2, s, s);
        } else if (n.type === 'triangle') {
          ctx.moveTo(0, -s * 0.65);
          ctx.lineTo(s * 0.6, s * 0.45);
          ctx.lineTo(-s * 0.6, s * 0.45);
          ctx.closePath();
        } else if (n.type === 'diamond') {
          ctx.moveTo(0, -s * 0.6);
          ctx.lineTo(s * 0.5, 0);
          ctx.lineTo(0, s * 0.6);
          ctx.lineTo(-s * 0.5, 0);
          ctx.closePath();
        } else {
          ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.stroke();

        // Inner center node point
        ctx.fillStyle = n.color.stroke;
        ctx.beginPath();
        ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // Draw subtle connecting wireframe lines between close nodes
      ctx.save();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-canvas-toy-container"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="hero-canvas-toy" />
      {!hintDismissed && (
        <div className="hero-canvas-hint">
          <span className="hint-icon">🎮</span> Click / tap canvas to fire impulse
        </div>
      )}
    </div>
  );
}

export default HeroCanvasToy;
