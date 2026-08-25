import React, { useEffect, useRef } from 'react';

interface AscentMetaphorBackgroundProps {
  mousePos: { x: number; y: number };
  intensity?: number;
}

export const AscentMetaphorBackground: React.FC<AscentMetaphorBackgroundProps> = ({
  mousePos,
  intensity = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseTargetRef = useRef({ x: 0.5, y: 0.5 });
  const currentMouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    mouseTargetRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes along ascending streamlines
    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      progress: number;
      speed: number;
      size: number;
      alpha: number;
      branch: number;
    }

    const particleCount = width < 768 ? 40 : 85;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const progress = Math.random();
      particles.push({
        x: 0,
        y: 0,
        baseX: 0,
        baseY: 0,
        progress: progress,
        speed: 0.001 + Math.random() * 0.0018,
        size: 1 + Math.random() * 2.2,
        alpha: 0.2 + Math.random() * 0.7,
        branch: Math.floor(Math.random() * 5) - 2, // -2, -1, 0, 1, 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      
      // Smooth dampening of mouse coordinate interpolation
      currentMouseRef.current.x += (mouseTargetRef.current.x - currentMouseRef.current.x) * 0.05;
      currentMouseRef.current.y += (mouseTargetRef.current.y - currentMouseRef.current.y) * 0.05;

      const mx = (currentMouseRef.current.x - 0.5) * 60;
      const my = (currentMouseRef.current.y - 0.5) * 40;

      ctx.clearRect(0, 0, width, height);

      const originX = width * 0.5 + mx * 0.4;
      const originY = height * 0.96; // Originates from the bottom of the hero

      // Draw subtle background radial glow
      const horizonGlow = ctx.createRadialGradient(
        originX, 
        height * 0.35, 
        10, 
        originX, 
        height * 0.35, 
        Math.max(width, height) * 0.6
      );
      horizonGlow.addColorStop(0, 'rgba(56, 189, 248, 0.045)');
      horizonGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.015)');
      horizonGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw mathematical ascending curved streamlines (The Ascent Path)
      const streamLines = [
        { spread: -0.38, alpha: 0.12, width: 1.0 },
        { spread: -0.18, alpha: 0.22, width: 1.2 },
        { spread: 0.0,   alpha: 0.45, width: 1.6 }, // Central spinal ascent line
        { spread: 0.18,  alpha: 0.22, width: 1.2 },
        { spread: 0.38,  alpha: 0.12, width: 1.0 },
      ];

      streamLines.forEach((stream) => {
        ctx.beginPath();
        ctx.moveTo(originX, originY);

        const targetX = width * (0.5 + stream.spread) + mx;
        const targetY = height * 0.15 + my;

        const cp1x = originX + stream.spread * width * 0.15;
        const cp1y = height * 0.68;
        const cp2x = targetX - stream.spread * width * 0.1;
        const cp2y = height * 0.38;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, targetX, targetY);

        const gradient = ctx.createLinearGradient(originX, originY, targetX, targetY);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.02)');
        gradient.addColorStop(0.3, `rgba(56, 189, 248, ${stream.alpha * 0.6 * intensity})`);
        gradient.addColorStop(0.8, `rgba(255, 255, 255, ${stream.alpha * 0.9 * intensity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = stream.width;
        ctx.stroke();

        // Apex destination aura
        if (stream.spread === 0.0) {
          ctx.beginPath();
          ctx.arc(targetX, targetY, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#38BDF8';
          ctx.shadowBlur = 18;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Update & render ascending particles along the ascent field
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.branch = Math.floor(Math.random() * 5) - 2;
        }

        const spreadFactor = (p.branch * 0.18) * p.progress;
        const currentY = originY - p.progress * (originY - height * 0.15);
        const currentX = originX + spreadFactor * width * 0.8 + Math.sin(time * 2 + p.progress * 6) * 12 + mx * (1 - p.progress);

        // Particle halo
        const particleAlpha = Math.sin(p.progress * Math.PI) * p.alpha * intensity;
        
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size * (1 + p.progress * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = p.progress > 0.6 ? `rgba(255, 255, 255, ${particleAlpha})` : `rgba(56, 189, 248, ${particleAlpha * 0.85})`;
        ctx.fill();
      });

      // Subtle horizontal elevation grid lines
      const gridLevels = 5;
      for (let g = 1; g <= gridLevels; g++) {
        const lineY = height * (0.2 + (g / (gridLevels + 1)) * 0.65);
        ctx.beginPath();
        ctx.moveTo(width * 0.2, lineY);
        ctx.lineTo(width * 0.8, lineY);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.02)`;
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 12]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full block opacity-90" />
      
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/60" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#08090B]/30 to-[#08090B]/80" />
    </div>
  );
};
