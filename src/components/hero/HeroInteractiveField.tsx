import React, { useEffect, useRef } from 'react';

interface HeroInteractiveFieldProps {
  mousePosition: { x: number; y: number };
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export const HeroInteractiveField: React.FC<HeroInteractiveFieldProps> = ({ mousePosition }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef(mousePosition);
  const prefersReducedMotion = useRef(false);

  // Keep mouse ref in sync without re-running the effect
  useEffect(() => {
    mouseRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mq.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener('change', handleChange);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate lightweight, restrained particles
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
        baseAlpha: Math.random() * 0.25 + 0.15,
      });
    }

    let smoothMouseX = mouseRef.current.x;
    let smoothMouseY = mouseRef.current.y;

    const render = () => {
      // If reduced motion, render a static frame (particles but no animation)
      if (prefersReducedMotion.current) {
        ctx.clearRect(0, 0, width, height);
        for (const p of particles) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 157, 158, ${p.baseAlpha * 0.5})`;
          ctx.fill();
        }
        // Don't continue the animation loop
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates interpolation from the ref
      smoothMouseX += (mouseRef.current.x - smoothMouseX) * 0.05;
      smoothMouseY += (mouseRef.current.y - smoothMouseY) * 0.05;

      // Draw subtle ambient radial glow around mouse
      const mouseGrad = ctx.createRadialGradient(
        smoothMouseX,
        smoothMouseY,
        0,
        smoothMouseX,
        smoothMouseY,
        450
      );
      mouseGrad.addColorStop(0, 'rgba(0, 157, 158, 0.07)');
      mouseGrad.addColorStop(0.5, 'rgba(0, 157, 158, 0.02)');
      mouseGrad.addColorStop(1, 'rgba(0, 157, 158, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // Secondary ambient glow top right
      const ambientGrad = ctx.createRadialGradient(
        width * 0.8,
        height * 0.3,
        0,
        width * 0.8,
        height * 0.3,
        600
      );
      ambientGrad.addColorStop(0, 'rgba(154, 237, 252, 0.03)');
      ambientGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles & connections
      const maxConnectDistance = 140;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle mouse interaction (slight attraction/repulsion field)
        const dxMouse = smoothMouseX - p.x;
        const dyMouse = smoothMouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 220 && distMouse > 0) {
          const force = (220 - distMouse) / 220;
          p.x += (dxMouse / distMouse) * force * 0.6;
          p.y += (dyMouse / distMouse) * force * 0.6;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 157, 158, ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles with thin architectural lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineAlpha = (1 - dist / maxConnectDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 157, 158, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      mq.removeEventListener('change', handleChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Stable — reads mouseRef.current inside the loop

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-80 mix-blend-screen"
        aria-hidden="true"
      />
    </div>
  );
};
